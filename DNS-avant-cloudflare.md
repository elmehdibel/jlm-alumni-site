# Relevé DNS de jlmalumni.com avant la bascule vers Cloudflare (23/11/2026)

Source : serveurs Hostinger (ns1/ns2.dns-parking.com). Sert de référence pour vérifier la zone Cloudflare
et pour revenir en arrière si besoin (remettre ns1.dns-parking.com / ns2.dns-parking.com chez Hostinger).

| Nom | Type | Valeur | Rôle | À garder |
|---|---|---|---|---|
| jlmalumni.com | A | 185.199.108.153 | site (GitHub Pages) | oui |
| jlmalumni.com | A | 185.199.109.153 | site | oui |
| jlmalumni.com | A | 185.199.110.153 | site | oui |
| jlmalumni.com | A | 185.199.111.153 | site | oui |
| www | CNAME | elmehdibel.github.io | site | oui |
| jlmalumni.com | MX (priorité 0) | jlmalumni-com.mail.protection.outlook.com | réception emails Microsoft 365 | **oui, critique** |
| jlmalumni.com | TXT | v=spf1 include:spf.protection.outlook.com -all | SPF Microsoft 365 | **oui, critique** |
| jlmalumni.com | TXT | MS=ms27177320 | vérification Microsoft | oui |
| jlmalumni.com | TXT | MS=ms38419812 | vérification Microsoft | oui |
| _dmarc | TXT | v=DMARC1; p=none | DMARC | oui |
| autodiscover | CNAME | autodiscover.outlook.com | configuration Outlook | **oui** |
| _github-pages-challenge-elmehdibel | TXT | 47315718d79fb991ca27a53b374dee | vérification domaine GitHub | oui |
| autodiscover | CNAME | autodiscover.mail.hostinger.com | doublon (anomalie Hostinger) | non |
| hostingermail-a._domainkey | CNAME | hostingermail-a.dkim.mail.hostinger.com | ancienne messagerie Hostinger | non |
| hostingermail-b._domainkey | CNAME | hostingermail-b.dkim.mail.hostinger.com | ancienne messagerie Hostinger | non |
| hostingermail-c._domainkey | CNAME | hostingermail-c.dkim.mail.hostinger.com | ancienne messagerie Hostinger | non |

Remarque : aucun enregistrement DKIM Microsoft 365 (selector1/selector2._domainkey) n'existe : la signature DKIM
du domaine n'est pas activée côté Microsoft 365 (amélioration possible de la délivrabilité, plus tard).
