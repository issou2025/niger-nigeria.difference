// Translation System
const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.skills": "Compétences", 
    "nav.projects": "Projets",
    "nav.services": "Services",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.subtitle": "Ingénieur Structure Visionnaire",
    "hero.title": "Transformez vos idées en structures d'exception",
    "hero.tagline": "Je traduis la complexité architecturale en structures élégantes, robustes et optimisées grâce à une expertise technique de pointe et des outils BIM révolutionnaires.",
    "hero.cta.projects": "Voir mes projets",
    "hero.cta.contact": "Discuter de votre projet",
    
    // Skills Page
    "skills.title": "Mon Arsenal Technique",
    "skills.subtitle": "Une expertise pointue en ingénierie structure, BIM, et analyse numérique pour des projets d'exception",
    "skills.timeline.title": "Parcours d'Excellence",
    "skills.progress.title": "Niveau d'Expertise",
    
    // Projects Page
    "projects.title": "De la Vision à la Réalité",
    "projects.subtitle": "Découvrez comment je transforme les esquisses architecturales en structures d'exception",
    "projects.comparison.title": "Avant / Après",
    "projects.comparison.subtitle": "Découvrez la transformation complète d'un projet, de l'esquisse architecturale au modèle structurel final optimisé.",
    "projects.stats.title": "Chiffres Clés",
    "projects.stats.completed": "Projets Réalisés",
    "projects.stats.clients": "Clients Satisfaits",
    "projects.stats.experience": "Années d'Expérience",
    "projects.stats.optimization": "Optimisation Moyenne",
    
    // Services Page
    "services.title": "Services sur Mesure",
    "services.subtitle": "Des solutions d'ingénierie structure complètes et personnalisées pour vos projets",
    "services.process.title": "Notre Processus",
    "services.faq.title": "Questions Fréquentes",
    "services.faq.q1": "Quels types de structures concevez-vous ?",
    "services.faq.a1": "Je conçois tous types de structures : bâtiments résidentiels et commerciaux, ponts, ouvrages d'art, structures industrielles et projets spéciaux.",
    "services.faq.q2": "Utilisez-vous les dernières technologies BIM ?",
    "services.faq.a2": "Absolument ! J'utilise Revit, Robot Structural Analysis et d'autres outils BIM de pointe pour une modélisation 3D précise et une collaboration optimale.",
    "services.faq.q3": "Quelle est votre approche pour l'optimisation ?",
    "services.faq.a3": "J'optimise chaque projet en termes de coût, de performance et de durabilité, en respectant toujours les normes de sécurité en vigueur.",
    "services.faq.q4": "Pouvez-vous intervenir sur des projets existants ?",
    "services.faq.a4": "Oui, je propose des services de diagnostic, de renforcement et de réhabilitation pour les structures existantes.",
    
    // Contact Page
    "contact.title": "Prêt à construire ?",
    "contact.subtitle": "Discutons de votre projet et transformons vos idées en structures d'exception",
    "contact.form.title": "Envoyez-moi un message",
    "contact.form.name": "Nom complet",
    "contact.form.email": "Adresse email",
    "contact.form.phone": "Téléphone",
    "contact.form.project": "Type de projet",
    "contact.form.message": "Votre message",
    "contact.form.send": "Envoyer le message",
    "contact.info.title": "Informations de Contact",
    "contact.info.email": "Email",
    "contact.info.phone": "Téléphone",
    "contact.info.location": "Localisation",
    "contact.map.title": "Zone d'Intervention",
    "contact.map.description": "Intervention sur toute la France et à l'international"
  },
  
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.skills": "Skills",
    "nav.projects": "Projects", 
    "nav.services": "Services",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.subtitle": "Visionary Structural Engineer",
    "hero.title": "Transform your ideas into exceptional structures",
    "hero.tagline": "I translate architectural complexity into elegant, robust, and optimized structures through cutting-edge technical expertise and revolutionary BIM tools.",
    "hero.cta.projects": "View my projects",
    "hero.cta.contact": "Discuss your project",
    
    // Skills Page
    "skills.title": "My Technical Arsenal",
    "skills.subtitle": "Sharp expertise in structural engineering, BIM, and numerical analysis for exceptional projects",
    "skills.timeline.title": "Excellence Journey",
    "skills.progress.title": "Expertise Level",
    
    // Projects Page
    "projects.title": "From Vision to Reality",
    "projects.subtitle": "Discover how I transform architectural sketches into exceptional structures",
    "projects.comparison.title": "Before / After",
    "projects.comparison.subtitle": "Discover the complete transformation of a project, from architectural sketch to optimized final structural model.",
    "projects.stats.title": "Key Figures",
    "projects.stats.completed": "Completed Projects",
    "projects.stats.clients": "Satisfied Clients",
    "projects.stats.experience": "Years of Experience",
    "projects.stats.optimization": "Average Optimization",
    
    // Services Page
    "services.title": "Tailored Services",
    "services.subtitle": "Complete and personalized structural engineering solutions for your projects",
    "services.process.title": "Our Process",
    "services.faq.title": "Frequently Asked Questions",
    "services.faq.q1": "What types of structures do you design?",
    "services.faq.a1": "I design all types of structures: residential and commercial buildings, bridges, civil works, industrial structures and special projects.",
    "services.faq.q2": "Do you use the latest BIM technologies?",
    "services.faq.a2": "Absolutely! I use Revit, Robot Structural Analysis and other cutting-edge BIM tools for precise 3D modeling and optimal collaboration.",
    "services.faq.q3": "What is your approach to optimization?",
    "services.faq.a3": "I optimize each project in terms of cost, performance and durability, always respecting current safety standards.",
    "services.faq.q4": "Can you work on existing projects?",
    "services.faq.a4": "Yes, I offer diagnostic, reinforcement and rehabilitation services for existing structures.",
    
    // Contact Page
    "contact.title": "Ready to build?",
    "contact.subtitle": "Let's discuss your project and transform your ideas into exceptional structures",
    "contact.form.title": "Send me a message",
    "contact.form.name": "Full name",
    "contact.form.email": "Email address",
    "contact.form.phone": "Phone number",
    "contact.form.project": "Project type",
    "contact.form.message": "Your message",
    "contact.form.send": "Send message",
    "contact.info.title": "Contact Information",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.location": "Location",
    "contact.map.title": "Service Area",
    "contact.map.description": "Intervention throughout France and internationally"
  }
};

let currentLang = 'fr';

// Translation function
function translatePage(lang) {
  currentLang = lang;
  const elements = document.querySelectorAll('[data-translate]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update document language
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Save language preference
  localStorage.setItem('preferredLanguage', lang);
}

// Initialize language from localStorage
function initLanguage() {
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
    translatePage(savedLang);
    
    // Update language switcher
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-lang') === savedLang) {
        btn.classList.add('active');
      }
    });
  }
}

// Mobile menu functionality
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      
      // Animate menu icon
      const icon = mobileMenuBtn.querySelector('i');
      if (mobileMenu.classList.contains('active')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    });

    // Close mobile menu when clicking on links
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = 'fas fa-bars';
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = 'fas fa-bars';
      }
    });
  }
}

// Custom cursor functionality
function initCustomCursor() {
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');

  if (cursorDot && cursorOutline && !('ontouchstart' in window)) {
    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      gsap.to(cursorDot, { x: clientX, y: clientY, duration: 0.1 });
      gsap.to(cursorOutline, { x: clientX, y: clientY, duration: 0.3 });
    });
  } else if (cursorDot && cursorOutline) {
    // Hide cursor on mobile
    cursorDot.style.display = 'none';
    cursorOutline.style.display = 'none';
  }
}

// Header scroll effect
function initHeaderScroll() {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (header) {
      if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 26, 0.95)';
      } else {
        header.style.background = 'rgba(10, 10, 26, 0.8)';
      }
    }
  });
}

// Language switcher functionality
function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      
      // Update active button
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Translate page
      translatePage(lang);
    });
  });
}

// Smooth scroll functionality
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
  // Initialize GSAP
  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
  }

  // Initialize all features
  initLanguage();
  initMobileMenu();
  initCustomCursor();
  initHeaderScroll();
  initLanguageSwitcher();
  initSmoothScroll();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translations, translatePage, currentLang };
} 