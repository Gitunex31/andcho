// ===== LANGUAGE SELECTOR SCRIPT =====
function toggleLangMenu() {
  const menu = document.querySelector('.lang-options');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// ===== TRANSLATIONS =====
const translations = {
  en: {
    hero_title: "Welcome to Authentification-Recharges.com",
    hero_text: "Quickly verify the authenticity of your tickets, cards or purchase codes. Our system immediately tells you if the code has already been used.",
    hero_link: "Discover our offers",
    faq1: "What is a prepaid or recharge ticket?",
    faq1r: "A prepaid ticket is a payment method available as a code. It is often used to purchase goods or services online. These tickets offer a secure alternative to traditional bank cards.",
    faq2: "How does ticket verification work?",
    faq2r: "Just enter your ticket code on our platform. The system checks whether it has already been used. You immediately receive a confirmation email.",
    faq3: "What types of tickets can I verify here?",
    faq3r: "Our platform supports recharge tickets like Transcash, PCS, Neosurf and more. You can also check codes for Google Play, Amazon, Steam, or PlayStation. The list is updated regularly.",
    faq4: "How do I receive a confirmation email?",
    faq4r: "Just enter a valid email address in the verification form. After submission, an email is automatically sent to you. This message confirms whether the ticket has been used.",
    footer_faq: "FAQ",
    footer_contact: "Contact",
    footer_copyright: "© 2025 Authentification-Recharges.com All rights reserved."
  },
  fr: {
    hero_title: "Bienvenue sur Authentification-Recharges.com",
    hero_text: "Vérifiez rapidement l’authenticité de vos tickets, cartes ou codes d’achat. Notre système vous informe instantanément si le code a déjà été utilisé ou non.",
    hero_link: "Découvrir nos offres",
    faq1: "Qu'est-ce qu’un ticket de recharge ou un ticket prépayé ?",
    faq1r: "Un ticket prépayé est un moyen de paiement disponible sous forme de code. Il est souvent utilisé pour acheter des biens ou des services en ligne. Ces tickets offrent une alternative sécurisée aux cartes bancaires traditionnelles.",
    faq2: "Comment fonctionne la vérification d’un ticket ?",
    faq2r: "Il vous suffit d’entrer le code de votre ticket sur notre plateforme. Le système analyse alors si ce code a déjà été utilisé ou non. Vous recevez immédiatement un message de confirmation dans votre boîte mail.",
    faq3: "Quels types de tickets puis-je vérifier ici ?",
    faq3r: "Notre plateforme prend en charge les tickets de recharge comme Transcash, PCS, Neosurf, et bien d'autres. Vous pouvez aussi vérifier les codes pour Google Play, Amazon, Steam, ou PlayStation. La liste est mise à jour régulièrement pour inclure de nouveaux formats.",
    faq4: "Comment recevoir un email de confirmation ?",
    faq4r: "Entrez simplement une adresse e-mail valide dans le formulaire de vérification. Une fois le code soumis, un email vous est automatiquement envoyé. Ce message confirme l’état d’utilisation du ticket.",
    footer_faq: "FAQ",
    footer_contact: "Contact",
    footer_copyright: "© 2025 Authentification-Recharges.com Tous droits réservés."
  },
  es: {
    hero_title: "Bienvenido a Authentification-Recharges.com",
    hero_text: "Verifica rápidamente la autenticidad de tus tickets, tarjetas o códigos. Nuestro sistema te informa de inmediato si el código ya ha sido utilizado.",
    hero_link: "Descubre nuestras ofertas",
    faq1: "¿Qué es un ticket de recarga o un ticket prepago?",
    faq1r: "Un ticket prepago es un medio de pago disponible en forma de código. Se utiliza a menudo para comprar bienes o servicios en línea. Estos tickets ofrecen una alternativa segura a las tarjetas bancarias tradicionales.",
    faq2: "¿Cómo funciona la verificación de tickets?",
    faq2r: "Simplemente introduce el código de tu ticket en nuestra plataforma. El sistema verifica si ya ha sido usado. Recibirás un correo de confirmación inmediatamente.",
    faq3: "¿Qué tipos de tickets puedo verificar aquí?",
    faq3r: "Nuestra plataforma admite tickets como Transcash, PCS, Neosurf y otros. También puedes verificar códigos de Google Play, Amazon, Steam o PlayStation. La lista se actualiza con frecuencia.",
    faq4: "¿Cómo recibir un correo de confirmación?",
    faq4r: "Introduce una dirección de correo válida en el formulario. Después del envío, recibirás un correo que confirma el estado del ticket.",
    footer_faq: "FAQ",
    footer_contact: "Contacto",
    footer_copyright: "© 2025 Authentification-Recharges.com Todos los derechos reservados."
  },
  pt: {
    hero_title: "Bem-vindo ao Authentification-Recharges.com",
    hero_text: "Verifique rapidamente a autenticidade dos seus cartões ou códigos de recarga. O sistema informa se o código já foi usado.",
    hero_link: "Descubra nossas ofertas",
    faq1: "O que é um bilhete de recarga ou pré-pago?",
    faq1r: "Um bilhete pré-pago é um meio de pagamento em forma de código. Ele é frequentemente usado para compras online. Esses bilhetes são uma alternativa segura aos cartões bancários.",
    faq2: "Como funciona a verificação de um bilhete?",
    faq2r: "Basta inserir o código do bilhete em nossa plataforma. O sistema verifica se já foi usado. Você recebe um e-mail de confirmação imediatamente.",
    faq3: "Quais tipos de bilhetes posso verificar aqui?",
    faq3r: "Aceitamos bilhetes como Transcash, PCS, Neosurf, Google Play, Amazon, Steam e outros. A lista é atualizada regularmente.",
    faq4: "Como recebo um e-mail de confirmação?",
    faq4r: "Insira um e-mail válido no formulário. Você receberá uma confirmação automática sobre o estado do bilhete.",
    
    footer_faq: "FAQ",
    footer_contact: "Contato",
    footer_copyright: "© 2025 Authentification-Recharges.com Todos os direitos reservados."
  },
  de: {
    hero_title: "Willkommen bei Authentification-Recharges.com",
    hero_text: "Überprüfen Sie schnell die Echtheit Ihrer Tickets, Karten oder Codes. Unser System informiert Sie sofort, ob der Code bereits verwendet wurde.",
    hero_link: "Entdecken Sie unsere Angebote",
    faq1: "Was ist ein Aufladeticket oder Prepaid-Ticket?",
    faq1r: "Ein Prepaid-Ticket ist eine Zahlungsmethode in Form eines Codes. Es wird häufig für Online-Einkäufe verwendet. Diese Tickets sind eine sichere Alternative zu Kreditkarten.",
    faq2: "Wie funktioniert die Ticketprüfung?",
    faq2r: "Geben Sie den Ticketcode auf unserer Plattform ein. Das System prüft, ob der Code verwendet wurde. Sie erhalten sofort eine Bestätigungs-E-Mail.",
    faq3: "Welche Ticketarten kann ich hier prüfen?",
    faq3r: "Unsere Plattform unterstützt Tickets wie Transcash, PCS, Neosurf und weitere. Auch Google Play, Amazon, Steam oder PlayStation Codes sind möglich.",
    faq4: "Wie erhalte ich eine Bestätigungs-E-Mail?",
    faq4r: "Geben Sie eine gültige E-Mail-Adresse ein. Nach dem Absenden erhalten Sie eine automatische E-Mail zur Bestätigung.",
    
    footer_faq: "FAQ",
    footer_contact: "Kontakt",
    footer_copyright: "© 2025 Authentification-Recharges.com Alle Rechte vorbehalten."
  },
  it: {
    hero_title: "Benvenuto su Authentification-Recharges.com",
    hero_text: "Verifica rapidamente l'autenticità dei tuoi ticket o codici. Il nostro sistema ti informa immediatamente se il codice è già stato usato.",
    hero_link: "Scopri le nostre offerte",
    faq1: "Cos'è un ticket di ricarica o prepagato?",
    faq1r: "Un ticket prepagato è un metodo di pagamento sotto forma di codice. È spesso usato per acquisti online. È un'alternativa sicura alla carta di credito.",
    faq2: "Come funziona la verifica di un ticket?",
    faq2r: "Inserisci il codice sulla nostra piattaforma. Il sistema controlla se è stato usato. Riceverai subito un'e-mail di conferma.",
    faq3: "Quali tipi di ticket posso verificare qui?",
    faq3r: "Supportiamo ticket come Transcash, PCS, Neosurf, Google Play, Amazon, Steam e PlayStation. L’elenco viene aggiornato regolarmente.",
    faq4: "Come ricevere un'email di conferma?",
    faq4r: "Inserisci un'email valida nel modulo. Riceverai un messaggio automatico sullo stato del ticket.",
    
    footer_faq: "FAQ",
    footer_contact: "Contatto",
    footer_copyright: "© 2025 Authentification-Recharges.com Tutti i diritti riservati."
  }
};

// ========= LANGUAGE SELECTOR =========

function toggleLangMenu() {
  const menu = document.querySelector('.lang-options');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
  updateSelectedLangDisplay(lang);
  document.querySelector('.lang-options').style.display = 'none';
}

function updateSelectedLangDisplay(lang) {
  const selectedLangEl = document.querySelector('.selected-lang');
  const flags = {
    en: 'gb', fr: 'fr', es: 'es', de: 'de', it: 'it', pt: 'pt'
  };
  const names = {
    en: 'English', fr: 'Français', es: 'Español',
    de: 'Deutsch', it: 'Italiano', pt: 'Português'
  };
  selectedLangEl.innerHTML = `
    <img src="https://flagcdn.com/w20/${flags[lang]}.png" alt="${lang}">
    <span class="ms-2">${names[lang]}</span>
  `;
}

function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'fr';
  applyTranslations(lang);
  updateSelectedLangDisplay(lang);
});

function setLang(lang) {
  localStorage.setItem('lang', lang);
  location.reload(); // ou recharge les textes si tu les charges dynamiquement
}
