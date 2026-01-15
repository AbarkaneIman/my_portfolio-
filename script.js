/* ========================================
   FONCTION DE TÉLÉCHARGEMENT DU CV
   ======================================== */

/**
 * Télécharge le fichier CV lorsqu'on clique sur le bouton
 * @param {Event} event - L'événement du clic
 */
function downloadCV(event) {
    // Empêche le comportement par défaut du lien
    event.preventDefault();
    
    // Créer un élément <a> dynamique pour le téléchargement
    const link = document.createElement('a');
    
    // Définir le chemin vers le fichier CV
    // IMPORTANT: Remplacez ce chemin par le chemin réel de votre CV
    link.href = 'CV_ABARKANE_IMAN.pdf';
    
    // Définir le nom du fichier téléchargé
    link.download = 'CV_ABARKANE_IMAN.pdf';
    
    // Ajouter le lien au DOM
    document.body.appendChild(link);
    
    // Simuler un clic sur le lien pour déclencher le téléchargement
    link.click();
    
    // Retirer le lien du DOM après le téléchargement
    document.body.removeChild(link);
}


/* ========================================
   EFFET DE LUEUR DU CURSEUR
   ======================================== */

// Sélectionner l'élément de lueur du curseur
const cursorGlow = document.querySelector('.cursor-glow');

// Écouter les mouvements de la souris sur tout le document
document.addEventListener('mousemove', (e) => {
    // Mettre à jour la position de la lueur en fonction de la position du curseur
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});


/* ========================================
   NAVIGATION FLUIDE (SMOOTH SCROLLING)
   ======================================== */

// Sélectionner tous les liens qui pointent vers des ancres (#)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Ajouter un écouteur d'événement à chaque lien
    anchor.addEventListener('click', function (e) {
        // Empêcher le comportement par défaut
        e.preventDefault();
        
        // Récupérer l'élément cible à partir de l'attribut href
        const target = document.querySelector(this.getAttribute('href'));
        
        // Si l'élément cible existe
        if (target) {
            // Faire défiler jusqu'à l'élément de manière fluide
            target.scrollIntoView({
                behavior: 'smooth',  // Animation fluide
                block: 'start'       // Aligner en haut de la fenêtre
            });
        }
    });
});


/* ========================================
   ANIMATION AU SCROLL (REVEAL ANIMATION)
   ======================================== */

// Sélectionner tous les éléments avec la classe 'reveal'
const reveals = document.querySelectorAll('.reveal');

/**
 * Fonction qui révèle les éléments lors du scroll
 */
const revealOnScroll = () => {
    // Obtenir la hauteur de la fenêtre
    const windowHeight = window.innerHeight;
    
    // Parcourir tous les éléments à révéler
    reveals.forEach(element => {
        // Obtenir la position du haut de l'élément par rapport à la fenêtre
        const elementTop = element.getBoundingClientRect().top;
        
        // Point de déclenchement : 100px avant que l'élément soit visible
        const revealPoint = 100;
        
        // Si l'élément est visible dans la fenêtre
        if (elementTop < windowHeight - revealPoint) {
            // Ajouter la classe 'active' qui déclenche l'animation
            element.classList.add('active');
        }
    });
};

// Écouter l'événement de scroll
window.addEventListener('scroll', revealOnScroll);

// Appeler la fonction au chargement de la page
// (pour révéler les éléments déjà visibles)
revealOnScroll();


/* ========================================
   INTERACTIONS DES CARTES DE PROJETS
   ======================================== */

// Sélectionner toutes les cartes de projets
const projectCards = document.querySelectorAll('.project-card');

// Parcourir chaque carte
projectCards.forEach(card => {
    // Quand la souris entre sur la carte
    card.addEventListener('mouseenter', function() {
        // Mettre la carte au premier plan
        this.style.zIndex = '10';
    });
    
    // Quand la souris quitte la carte
    card.addEventListener('mouseleave', function() {
        // Remettre la carte à son niveau normal
        this.style.zIndex = '1';
    });
});


/* ========================================
   NOTES POUR LE DÉVELOPPEMENT
   ======================================== */

/*
 * FICHIERS NÉCESSAIRES:
 * --------------------
 * 1. index.html  - Structure HTML du portfolio
 * 2. style.css   - Styles CSS (ce fichier doit être dans le même dossier)
 * 3. script.js   - Ce fichier JavaScript
 * 4. CV_ABARKANE_IMAN.pdf - Votre fichier CV (à placer dans le même dossier)
 * 
 * STRUCTURE DES FICHIERS:
 * ----------------------
 * mon-portfolio/
 * ├── index.html
 * ├── style.css
 * ├── script.js
 * └── CV_ABARKANE_IMAN.pdf
 * 
 * FONCTIONNALITÉS IMPLÉMENTÉES:
 * ----------------------------
 * ✓ Effet de lueur qui suit le curseur
 * ✓ Navigation fluide entre les sections
 * ✓ Animations au scroll (révélation progressive)
 * ✓ Téléchargement du CV
 * ✓ Interactions au survol des cartes de projets
 * 
 * POUR AJOUTER DE NOUVELLES FONCTIONNALITÉS:
 * -----------------------------------------
 * - Vous pouvez ajouter d'autres écouteurs d'événements
 * - Modifier les animations existantes
 * - Ajouter de nouvelles interactions utilisateur
 */