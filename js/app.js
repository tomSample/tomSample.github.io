// ====ANIMATIONS====

document.addEventListener('DOMContentLoaded', () => {
    // Ajoute un écouteur d'événement pour exécuter le code lorsque le DOM est complètement chargé
    const observeElements = (selector, threshold) => {
        // Sélectionne tous les éléments correspondant au sélecteur donné
        const elements = document.querySelectorAll(selector);
        
        // Crée une instance de IntersectionObserver
        const observer = new IntersectionObserver((entries, observer) => {
            // Parcourt toutes les entrées observées
            entries.forEach(entry => {
                // Vérifie si l'élément est visible dans le viewport
                if (entry.isIntersecting) {
                    // Ajoute la classe 'visible' à l'élément
                    entry.target.classList.add('visible');
                    // Arrête d'observer l'élément une fois l'animation déclenchée
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold }); // Définit le seuil de visibilité pour déclencher l'observation

        // Observe chaque élément sélectionné
        elements.forEach(element => observer.observe(element));
    };

    //selecteurs cibles

    observeElements('.project', 0.8);
    observeElements('.soft-skill-icon', 0.5);
    observeElements('#subtitle', 0.5);
    observeElements('#soft-skill-icon-1', 0.8);
    observeElements('#soft-skill-icon-2', 0.8);
    observeElements('#soft-skill-icon-3', 0.8);
    observeElements('#icon-1', 0.8);
    observeElements('#icon-2', 0.8);
    observeElements('#icon-3', 0.8);
    observeElements('#icon-4', 0.8);
    observeElements('#icon-5', 0.8);
    observeElements('#icon-6', 0.8);
    observeElements('#icon-7', 0.8);

});
