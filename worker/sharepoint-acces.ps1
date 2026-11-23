# Donne à l'application « JLM Site Formulaires » l'accès au SEUL site SharePoint des candidatures
# (permission Sites.Selected), puis enregistre l'identifiant du site dans sharepoint-site.txt.
# À lancer dans PowerShell (pwsh-preview sur Mac), connecté avec un compte PROPRIÉTAIRE du site
# et administrateur Microsoft 365.

$ErrorActionPreference = 'Stop'
$guid = '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}'

$SiteUrl = (Read-Host "Adresse du site SharePoint (ex. https://xxx.sharepoint.com/sites/CandidaturesJLM)").Trim().TrimEnd('/')
$saisie  = Read-Host "ID d'application (client) de JLM Site Formulaires"
if ($saisie -notmatch "^\s*($guid)\s*$") { Write-Host "ID d'application illisible : colle-le UNE seule fois (format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)." -ForegroundColor Red; exit 1 }
$AppId = $Matches[1]
Write-Host "ID d'application retenu : $AppId"

if (-not (Get-Module -ListAvailable Microsoft.Graph.Authentication)) {
  Write-Host "Installation du module Microsoft Graph (une seule fois)..."
  Install-Module Microsoft.Graph.Authentication -Scope CurrentUser -Force
}
Connect-MgGraph -Scopes "Sites.FullControl.All" -NoWelcome -ContextScope Process
Write-Host "Connecté en tant que : $((Get-MgContext).Account)" -ForegroundColor Cyan

$u = [Uri]$SiteUrl
try {
  $site = Invoke-MgGraphRequest -Method GET -Uri "https://graph.microsoft.com/v1.0/sites/$($u.Host):$($u.AbsolutePath)?`$select=id,displayName,webUrl"
} catch {
  Write-Host ""
  Write-Host "Le site n'est pas accessible avec ce compte." -ForegroundColor Red
  Write-Host "→ Vérifie l'adresse, et connecte-toi avec un compte PROPRIÉTAIRE du site (celui qui l'a créé)," -ForegroundColor Yellow
  Write-Host "  ou ajoute ce compte comme propriétaire : site › Paramètres (roue) › Autorisations du site." -ForegroundColor Yellow
  Disconnect-MgGraph | Out-Null
  exit 1
}
Write-Host "Site trouvé : $($site.displayName)" -ForegroundColor Cyan

$accorde = $false
$derniereErreur = ''
foreach ($role in 'fullcontrol', 'owner', 'write') {
  try {
    $corps = @{
      roles = @($role)
      grantedToIdentities = @(@{ application = @{ id = $AppId; displayName = 'JLM Site Formulaires' } })
    } | ConvertTo-Json -Depth 5
    Invoke-MgGraphRequest -Method POST -Uri "https://graph.microsoft.com/v1.0/sites/$($site.id)/permissions" -Body $corps -ContentType 'application/json' | Out-Null
    Write-Host "Accès accordé à l'application (rôle : $role)" -ForegroundColor Green
    $accorde = $true
    break
  } catch {
    $derniereErreur = $_.Exception.Message
    Write-Host "Rôle $role non accepté, essai du suivant..."
  }
}
if (-not $accorde) {
  Write-Host "Impossible d'accorder l'accès. Dernière erreur :" -ForegroundColor Red
  Write-Host $derniereErreur
  Disconnect-MgGraph | Out-Null
  exit 1
}

$fichier = Join-Path $PSScriptRoot 'sharepoint-site.txt'
$site.id | Out-File -FilePath $fichier -Encoding utf8 -NoNewline
Write-Host "Identifiant du site enregistré dans $fichier" -ForegroundColor Green
Disconnect-MgGraph | Out-Null
