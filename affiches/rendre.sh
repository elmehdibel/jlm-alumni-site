#!/bin/bash
# Génère les affiches : PDF A4 (impression) + PNG (WhatsApp, réseaux). Usage : ./rendre.sh
set -e
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
for nom in dsu team-leader; do
  qr=$([ $nom = dsu ] && echo qr-dsu.svg || echo qr-tl.svg)
  python3 -c "import sys; h=open('affiche-$nom.html').read(); q=open('$qr').read(); open('.rendu-$nom.html','w').write(h.replace('@@QR@@', q))"
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 \
    --print-to-pdf="affiche-$nom.pdf" "file://$PWD/.rendu-$nom.html" 2>/dev/null
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --virtual-time-budget=8000 \
    --window-size=794,1123 --force-device-scale-factor=2 \
    --screenshot="affiche-$nom.png" "file://$PWD/.rendu-$nom.html" 2>/dev/null
  rm -f ".rendu-$nom.html"
  echo "affiche-$nom : PDF + PNG"
done
