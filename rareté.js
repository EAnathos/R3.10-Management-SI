// Définir les raretés possibles
const raretes = ["commune", "rare", "épique", "légendaire"];

// Fonction pour tirer une carte en fonction de sa rareté
function tirerCarte() {
  // Générer un nombre aléatoire entre 0 et 1
  const random = Math.random();

  // Définir les seuils de rareté
  const seuils = [0.6, 0.8, 0.95]; // Vous pouvez ajuster ces valeurs en fonction de la distribution de rareté souhaitée

  // Parcourir les seuils pour déterminer la rareté de la carte
  for (let i = 0; i < seuils.length; i++) {
    if (random < seuils[i]) {
      return raretes[i];
    }
  }

  // Si le nombre aléatoire est supérieur à tous les seuils, la carte est de la rareté la plus élevée
  return raretes[raretes.length - 1];
}

// Exemple d'utilisation
const carteTiree = tirerCarte();
console.log("Carte tirée :", carteTiree);
