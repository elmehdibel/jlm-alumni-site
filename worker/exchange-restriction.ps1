# Limite l'application « JLM Site Formulaires » à la SEULE boîte contact@jlmalumni.com pour l'envoi d'emails
# (Exchange Online ApplicationAccessPolicy). À lancer dans PowerShell (pwsh-preview sur Mac) avec un compte
# administrateur Microsoft 365. Peut être relancé sans risque : ce qui existe déjà n'est pas recréé.

$ErrorActionPreference = 'Stop'
$Boite = 'contact@jlmalumni.com'
$Groupe = 'site-formulaires'
$guid = '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}'

$saisie = Read-Host "ID d'application (client) de JLM Site Formulaires"
if ($saisie -notmatch "^\s*($guid)\s*$") { Write-Host "ID d'application illisible : colle-le UNE seule fois." -ForegroundColor Red; exit 1 }
$AppId = $Matches[1]
$Admin = (Read-Host "Compte administrateur Microsoft 365 (ex. admin@JLMAlumniMA.onmicrosoft.com)").Trim()

if (-not (Get-Module -ListAvailable ExchangeOnlineManagement)) {
  Write-Host "Installation du module Exchange Online (une seule fois)..."
  Install-Module ExchangeOnlineManagement -Scope CurrentUser -Force
}
Import-Module ExchangeOnlineManagement
try {
  Connect-ExchangeOnline -UserPrincipalName $Admin -ShowBanner:$false
} catch {
  Write-Host "Connexion par navigateur impossible, passage à la connexion par code..." -ForegroundColor Yellow
  Connect-ExchangeOnline -Device -ShowBanner:$false
}

# 1. Groupe de sécurité contenant uniquement la boîte autorisée
$existe = $null
try { $existe = Get-DistributionGroup -Identity $Groupe -ErrorAction Stop } catch { }
if ($existe) {
  Write-Host "Groupe « $Groupe » déjà présent."
} else {
  New-DistributionGroup -Name "Site JLM - envoi formulaires" -Alias $Groupe -Type Security -Members $Boite | Out-Null
  Write-Host "Groupe « $Groupe » créé (membre : $Boite)." -ForegroundColor Green
}

# 2. Règle : l'application ne peut agir que sur les boîtes de ce groupe
$regle = Get-ApplicationAccessPolicy | Where-Object { $_.AppId -eq $AppId }
if ($regle) {
  Write-Host "Règle d'accès déjà présente pour cette application."
} else {
  New-ApplicationAccessPolicy -AppId $AppId -PolicyScopeGroupId $Groupe -AccessRight RestrictAccess -Description "Envoi uniquement depuis contact" | Out-Null
  Write-Host "Règle d'accès créée." -ForegroundColor Green
}

# 3. Vérification
Write-Host ""
$t = Test-ApplicationAccessPolicy -Identity $Boite -AppId $AppId
Write-Host "$Boite → $($t.AccessCheckResult)  (attendu : Granted)" -ForegroundColor $(if ($t.AccessCheckResult -eq 'Granted') { 'Green' } else { 'Red' })
try {
  $t2 = Test-ApplicationAccessPolicy -Identity $Admin -AppId $AppId
  Write-Host "$Admin → $($t2.AccessCheckResult)  (attendu : Denied)" -ForegroundColor $(if ($t2.AccessCheckResult -eq 'Denied') { 'Green' } else { 'Yellow' })
} catch {
  Write-Host "($Admin n'a pas de boîte aux lettres : test « Denied » ignoré.)"
}
Write-Host "Microsoft peut mettre jusqu'à 1 h à appliquer la règle partout."
Disconnect-ExchangeOnline -Confirm:$false | Out-Null
