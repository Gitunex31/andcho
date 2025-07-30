// ===== LANGUAGE SELECTOR SCRIPT =====
// Toggle the language dropdown
function toggleLangMenu() {
  const menu = document.querySelector('.lang-options');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// ===== TRANSLATIONS =====
const translations = {
  fr: {
    form_nom: "Nom :",
    form_prenom: "Prénom :",
    form_montant: "Montant :",
    form_email: "Votre email :",
    form_code: "Code :",
    form_message: "Votre message :",
    form_submit: "Envoyer",
    placeholder_nom: "Nom",
    placeholder_prenom: "Prénom",
    placeholder_montant: "Montant",
    placeholder_email: "Entrez votre email",
    placeholder_code: "Code",
    placeholder_message: "Écrivez votre message ici"
  },
  en: {
    form_nom: "Last Name:",
    form_prenom: "First Name:",
    form_montant: "Amount:",
    form_email: "Your email:",
    form_code: "Code:",
    form_message: "Your message:",
    form_submit: "Send",
    placeholder_nom: "Last Name",
    placeholder_prenom: "First Name",
    placeholder_montant: "Amount",
    placeholder_email: "Enter your email",
    placeholder_code: "Code",
    placeholder_message: "Write your message here"
  },
  es: {
    form_nom: "Apellido:",
    form_prenom: "Nombre:",
    form_montant: "Monto:",
    form_email: "Tu correo electrónico:",
    form_code: "Código:",
    form_message: "Tu mensaje:",
    form_submit: "Enviar",
    placeholder_nom: "Apellido",
    placeholder_prenom: "Nombre",
    placeholder_montant: "Monto",
    placeholder_email: "Ingresa tu correo electrónico",
    placeholder_code: "Código",
    placeholder_message: "Escribe tu mensaje aquí"
  },
  de: {
    form_nom: "Nachname:",
    form_prenom: "Vorname:",
    form_montant: "Betrag:",
    form_email: "Ihre E-Mail:",
    form_code: "Code:",
    form_message: "Ihre Nachricht:",
    form_submit: "Senden",
    placeholder_nom: "Nachname",
    placeholder_prenom: "Vorname",
    placeholder_montant: "Betrag",
    placeholder_email: "Geben Sie Ihre E-Mail ein",
    placeholder_code: "Code",
    placeholder_message: "Schreiben Sie hier Ihre Nachricht"
  },
  it: {
    form_nom: "Cognome:",
    form_prenom: "Nome:",
    form_montant: "Importo:",
    form_email: "La tua email:",
    form_code: "Codice:",
    form_message: "Il tuo messaggio:",
    form_submit: "Invia",
    placeholder_nom: "Cognome",
    placeholder_prenom: "Nome",
    placeholder_montant: "Importo",
    placeholder_email: "Inserisci la tua email",
    placeholder_code: "Codice",
    placeholder_message: "Scrivi qui il tuo messaggio"
  },
  pt: {
    form_nom: "Sobrenome:",
    form_prenom: "Nome:",
    form_montant: "Valor:",
    form_email: "Seu e-mail:",
    form_code: "Código:",
    form_message: "Sua mensagem:",
    form_submit: "Enviar",
    placeholder_nom: "Sobrenome",
    placeholder_prenom: "Nome",
    placeholder_montant: "Valor",
    placeholder_email: "Digite seu e-mail",
    placeholder_code: "Código",
    placeholder_message: "Escreva sua mensagem aqui"
  }
};

// ===== MAIN LANGUAGE SWITCHER =====
function setLang(langCode) {
  const flags = {
    fr: { img: 'https://flagcdn.com/w20/fr.png', name: 'Français' },
    en: { img: 'https://flagcdn.com/w20/gb.png', name: 'English' },
    es: { img: 'https://flagcdn.com/w20/es.png', name: 'Español' },
    de: { img: 'https://flagcdn.com/w20/de.png', name: 'Deutsch' },
    it: { img: 'https://flagcdn.com/w20/it.png', name: 'Italiano' },
    pt: { img: 'https://flagcdn.com/w20/pt.png', name: 'Português' }
  };

  const t = translations[langCode];
  if (!t) return console.warn('Langue non supportée :', langCode);

  // Met à jour le drapeau sélectionné
  const selected = document.querySelector('.selected-lang');
  selected.innerHTML = `<img src="${flags[langCode].img}" alt="${langCode}"><span>${flags[langCode].name}</span>`;

  document.querySelector('.lang-options').style.display = 'none';

  // Met à jour les labels
  document.querySelector('.label-nom').textContent = t.form_nom;
  document.querySelector('.label-prenom').textContent = t.form_prenom;
  document.querySelector('.label-amount').textContent = t.form_montant;
  document.querySelector('.label-email').textContent = t.form_email;
  document.querySelector('.label-code').textContent = t.form_code;
  document.querySelector('.label-message').textContent = t.form_message;

  // Met à jour les placeholders
  document.querySelector('.input-nom').placeholder = t.placeholder_nom;
  document.querySelector('.input-prenom').placeholder = t.placeholder_prenom;
  document.querySelector('.input-amount').placeholder = t.placeholder_montant;
  document.querySelector('.input-email').placeholder = t.placeholder_email;
  document.querySelector('.input-code').placeholder = t.placeholder_code;
  document.querySelector('.input-message').placeholder = t.placeholder_message;

  // Met à jour le bouton de soumission
  document.querySelector('.submit-button').textContent = t.form_submit;

  // Persist la langue choisie
  localStorage.setItem('lang', langCode);
  console.log('Langue changée vers :', langCode);
}

// Ferme le menu si on clique en dehors
document.addEventListener('click', (e) => {
  const container = document.querySelector('.custom-language-selector');
  if (!container.contains(e.target)) {
    document.querySelector('.lang-options').style.display = 'none';
  }
});

// Au chargement, applique la langue sauvegardée ou EN par défaut
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'en';
  setLang(savedLang);
});

// ===== FORM VALIDATION (null check) =====

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  const requiredFields = form.querySelectorAll('input[required]');

  form.addEventListener('submit', (e) => {
    let valid = true;

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        field.classList.add('input-invalid');
        valid = false;
      } else {
        field.classList.remove('input-invalid');
      }
    });

    if (!valid) e.preventDefault();
  });
});

// ===== PASSWORD VISIBILITY TOGGLE =====
function togglePasswordVisibility() {
  const codeInput = document.getElementById('code');
  const toggleIcon = document.querySelector('.toggle-password');
  if (!codeInput || !toggleIcon) return;

  if (codeInput.type === 'password') {
    codeInput.type = 'text';
    toggleIcon.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    codeInput.type = 'password';
    toggleIcon.classList.replace('fa-eye-slash', 'fa-eye');
  }
}

// ======================================
