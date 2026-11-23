/**
 * Taille d'affichage d'un logo pour que tous aient le même « poids » visuel, quelle que soit leur forme
 * (carré ou très allongé) : largeur × hauteur ≈ surface, dans la limite d'une hauteur et d'une largeur maximales.
 * Renvoie un style CSS avec les variables --w et --h (en px).
 */
export function tailleLogo(ratio: number, surface: number, hMax: number, wMax: number): string {
  let h = Math.sqrt(surface / ratio);
  let w = h * ratio;
  if (h > hMax) { h = hMax; w = h * ratio; }
  if (w > wMax) { w = wMax; h = w / ratio; }
  return `--w:${Math.round(w)}px;--h:${Math.round(h)}px;--r:${ratio}`;
}
