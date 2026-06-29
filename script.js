// 1. Dictionnaire des traductions (FR, EN, DE, IT)
  // Note : "deutsch" et "allemand" font référence à la même langue (Code 'de')
  const translations = {
    fr: {
      brand: '<i class="bi bi-shield-check text-primary"></i> Authentification<span class="text-primary">.</span>',
      badge: '<i class="bi bi-lock-fill me-1"></i> Système sécurisé & chiffré',
      hero_title: 'Vérifiez l’authenticité de vos recharges',
      hero_text: 'Notre plateforme analyse instantanément vos tickets, cartes ou codes d\'achat. Sachez immédiatement si votre code est valide ou s\'il a déjà été utilisé.',
      hero_link: 'Sélectionner un produit <i class="bi bi-arrow-right ms-2"></i>',
      section_services: 'Services pris en charge',
      section_trust: 'Pourquoi nous faire confiance ?',
      feat1_title: 'Chiffrement de bout en bout',
      feat1_text: 'Toutes les requêtes d\'analyse de vos codes de recharges transitent via des protocoles SSL hautement sécurisés.',
      feat2_title: 'Respect de la confidentialité',
      feat2_text: 'Nous ne stockons aucune valeur monétaire. Notre outil agit comme une simple passerelle de lecture instantanée.',
      feat3_title: 'Données en temps réel',
      feat3_text: 'La synchronisation directe avec les registres d\'émetteurs garantit un diagnostic fiable au moment exact de l\'envoi.',
      section_faq: 'Foire aux questions',
      faq1_q: 'Qu\'est-ce qu’un ticket de recharge ou un ticket prépayé ?',
      faq1_r: 'Un ticket prépayé est un moyen de paiement disponible sous forme de code unique. Utilisé pour régler des achats en ligne en toute sécurité, il représente une excellente alternative aux cartes bancaires traditionnelles.',
      faq2_q: 'Comment fonctionne la vérification d’un ticket ?',
      faq2_r: 'Il vous suffit d’entrer le code de votre ticket sur le formulaire dédié. Notre système analyse instantanément l’état d’activité du code, et vous recevez une confirmation immédiate sur votre boîte mail.',
      faq3_q: 'Quels types de tickets puis-je vérifier ici ?',
      faq3_r: 'Nous prenons en charge les émetteurs leaders comme Transcash, PCS ou Neosurf, ainsi que les codes de divertissement (Google Play, Amazon, Steam, PlayStation). La liste est continuellement mise à jour.',
      footer_copyright: '&copy; 2026 Authentification-Recharge.com — Tous droits réservés. Connexion chiffrée SSL.'
    },
    en: {
      brand: '<i class="bi bi-shield-check text-primary"></i> Authentication<span class="text-primary">.</span>',
      badge: '<i class="bi bi-lock-fill me-1"></i> Secure & encrypted system',
      hero_title: 'Verify the authenticity of your top-ups',
      hero_text: 'Our platform instantly analyzes your tickets, cards, or purchase codes. Know immediately if your code is valid or if it has already been used.',
      hero_link: 'Select a product <i class="bi bi-arrow-right ms-2"></i>',
      section_services: 'Supported Services',
      section_trust: 'Why trust us?',
      feat1_title: 'End-to-end encryption',
      feat1_text: 'All analysis requests for your top-up codes transit via highly secure SSL protocols.',
      feat2_title: 'Privacy compliance',
      feat2_text: 'We do not store any monetary value. Our tool acts as a simple instant reading gateway.',
      feat3_title: 'Real-time data',
      feat3_text: 'Direct synchronization with issuer registries guarantees a reliable diagnosis at the exact moment of sending.',
      section_faq: 'Frequently Asked Questions',
      faq1_q: 'What is a top-up ticket or a prepaid ticket?',
      faq1_r: 'A prepaid ticket is a payment method available as a unique code. Used to settle online purchases securely, it represents an excellent alternative to traditional credit cards.',
      faq2_q: 'How does ticket verification work?',
      faq2_r: 'Simply enter your ticket code into the dedicated form. Our system instantly analyzes the status of the code, and you receive an immediate confirmation in your mailbox.',
      faq3_q: 'What types of tickets can I verify here?',
      faq3_r: 'We support leading issuers like Transcash, PCS, or Neosurf, as well as entertainment codes (Google Play, Amazon, Steam, PlayStation). The list is continuously updated.',
      footer_copyright: '&copy; 2026 Authentication-Topup.com — All rights reserved. SSL Encrypted Connection.'
    },
    de: {
      brand: '<i class="bi bi-shield-check text-primary"></i> Authentifizierung<span class="text-primary">.</span>',
      badge: '<i class="bi bi-lock-fill me-1"></i> Sicheres & verschlüsseltes System',
      hero_title: 'Überprüfen Sie die Echtheit Ihres Guthabens',
      hero_text: 'Unsere Plattform analysiert sofort Ihre Tickets, Karten oder Kaufcodes. Erfahren Sie sofort, ob Ihr Code gültig ist oder ob er bereits verwendet wurde.',
      hero_link: 'Produkt auswählen <i class="bi bi-arrow-right ms-2"></i>',
      section_services: 'Unterstützte Dienste',
      section_trust: 'Warum uns vertrauen?',
      feat1_title: 'Ende-zu-Ende-Verschlüsselung',
      feat1_text: 'Alle Analyseanfragen für Ihre Aufladeprodukte werden über hochsichere SSL-Protokolle übertragen.',
      feat2_title: 'Datenschutz-Konformität',
      feat2_text: 'Wir speichern keine Geldwerte. Unser Tool fungiert als einfaches Gateway zum sofortigen Auslesen.',
      feat3_title: 'Echtzeit-Daten',
      feat3_text: 'Die direkte Synchronisation mit den Registern der Aussteller garantiert eine zuverlässige Diagnose genau zum Zeitpunkt des Versands.',
      section_faq: 'Häufig gestellte Fragen',
      faq1_q: 'Was ist ein Aufladeticket oder ein Prepaid-Ticket?',
      faq1_r: 'Ein Prepaid-Ticket ist ein Zahlungsmittel, das in Form eines einzigartigen Codes verfügbar ist. Es wird verwendet, um Online-Einkäufe sicher zu bezahlen, und stellt eine hervorragende Alternative zu herkömmlichen Bankkarten dar.',
      faq2_q: 'Wie funktioniert die Überprüfung eines Tickets?',
      faq2_r: 'Geben Sie einfach Ihren Ticketcode in das dafür vorgesehene Formular ein. Unser System analysiert sofort den Status des Codes, und Sie erhalten eine sofortige Bestätigung in Ihrem Posteingang.',
      faq3_q: 'Welche Arten von Tickets kann ich hier überprüfen?',
      faq3_r: 'Wir unterstützen führende Aussteller wie Transcash, PCS oder Neosurf sowie Unterhaltungscodes (Google Play, Amazon, Steam, PlayStation). Die Liste wird laufend aktualisiert.',
      footer_copyright: '&copy; 2026 Authentifizierung-Aufladen.com — Alle Rechte vorbehalten. SSL-verschlüsselte Verbindung.'
    },
    it: {
      brand: '<i class="bi bi-shield-check text-primary"></i> Autenticazione<span class="text-primary">.</span>',
      badge: '<i class="bi bi-lock-fill me-1"></i> Sistema sicuro e crittografato',
      hero_title: 'Verifica l\'autenticità delle tue ricariche',
      hero_text: 'La nostra piattaforma analizza istantaneamente i tuoi biglietti, carte o codici d\'acquisto. Scopri immediatamente se il tuo codice è valido o se è già stato utilizzato.',
      hero_link: 'Seleziona un prodotto <i class="bi bi-arrow-right ms-2"></i>',
      section_services: 'Servizi supportati',
      section_trust: 'Perché fidarsi di noi?',
      feat1_title: 'Crittografia end-to-end',
      feat1_text: 'Tutte le richieste di analisi per i tuoi codici di ricarica transitano attraverso protocolli SSL altamente sicuri.',
      feat2_title: 'Rispetto della privacy',
      feat2_text: 'Non memorizziamo alcun valore monetario. Il nostro strumento funge da semplice gateway di lettura istantanea.',
      feat3_title: 'Dati in tempo reale',
      feat3_text: 'La sincronizzazione diretta con i registri degli emittenti garantisce una diagnosi affidabile nell\'esatto momento dell\'invio.',
      section_faq: 'Domande frequenti',
      faq1_q: 'Cos\'è un biglietto di ricarica o un biglietto prepagato?',
      faq1_r: 'Un biglietto prepagato è un metodo di pagamento disponibile sotto forma di codice univoco. Utilizzato per regolare gli acquisti online in totale sicurezza, rappresenta un\'ottima alternativa alle carte di credito tradizionali.',
      faq2_q: 'Come funziona la verifica di un biglietto?',
      faq2_r: 'Ti basta inserire il codice del tuo biglietto nell\'apposito modulo. Il nostro sistema analizza istantaneamente lo stato di attività del codice e riceverai una conferma immediata nella tua casella di posta.',
      faq3_q: 'Quali tipi di biglietti posso verificare qui?',
      faq3_r: 'Supportiamo i principali emittenti come Transcash, PCS o Neosurf, nonché i codici di intrattenimento (Google Play, Amazon, Steam, PlayStation). L\'elenco è continuamente aggiornato.',
      footer_copyright: '&copy; 2026 Autenticazione-Ricarica.com — Tutti i diritti riservati. Connessione crittografata SSL.'
    }
  };

  // Infos d'affichage pour le bouton du sélecteur
  const langConfig = {
    en: { text: 'English', flag: 'https://flagcdn.com/w20/gb.png' },
    fr: { text: 'Français', flag: 'https://flagcdn.com/w20/fr.png' },
    de: { text: 'Deutsch', flag: 'https://flagcdn.com/w20/de.png' },
    it: { text: 'Italiano', flag: 'https://flagcdn.com/w20/it.png' }
  };

  // Gestion de l'affichage du menu déroulant
  function toggleLangMenu() {
    const menu = document.getElementById('langMenu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  }

  // Fermer le menu si on clique en dehors
  window.onclick = function(event) {
    if (!event.target.closest('.custom-language-selector')) {
      document.getElementById('langMenu').style.display = 'none';
    }
  }

  // Fonction principale de traduction globale
  function setLang(lang) {
    // Si la langue sélectionnée n'existe pas, on bascule sur l'anglais par défaut
    if (!translations[lang]) lang = 'en';

    // Mise à jour visuelle du bouton sélecteur principal
    const selectedLangDiv = document.querySelector('.selected-lang');
    if (selectedLangDiv && langConfig[lang]) {
      selectedLangDiv.innerHTML = `
        <img src="${langConfig[lang].flag}" alt="${lang.toUpperCase()}" class="rounded-1">
        <span class="ms-2 d-none d-sm-inline">${langConfig[lang].text}</span>
        <i class="bi bi-chevron-down ms-1 ms-sm-2 fs-7 text-secondary"></i>
      `;
    }

    // Traduction de tous les éléments possédant l'attribut data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });

    // Mascher le menu après sélection
    document.getElementById('langMenu').style.display = 'none';
    
    // Optionnel : Sauvegarder le choix de l'utilisateur pour ses prochaines visites
    localStorage.setItem('preferred_lang', lang);
  }

  // Au chargement de la page, exécuter la langue par défaut ou enregistrée
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('preferred_lang') || 'fr';
    setLang(savedLang);
  });