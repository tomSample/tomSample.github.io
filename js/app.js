// ====ANIMATIONS====

document.addEventListener('DOMContentLoaded', () => {                       // ajouter un écouteur d'événement pour exécuter le code lorsque le DOM est complètement chargé
    const observeElements = (selector, threshold) => {                       // sélectionner tous les éléments correspondant au sélecteur donné
        const elements = document.querySelectorAll(selector);
        
        const observer = new IntersectionObserver((entries, observer) => {          // créér une instance de IntersectionObserver
            entries.forEach(entry => {                                               // parcourir toutes les entrées observées
                if (entry.isIntersecting) {                                         // vérifier si l'élément est visible dans le viewport
                    entry.target.classList.add('visible');                           // ajouter la classe 'visible' à l'élément
                    observer.unobserve(entry.target);                                // arrêter d'observer l'élément une fois l'animation déclenchée
                }
            });
        }, { threshold });                                                          // définir le seuil de visibilité pour déclencher l'observation

        elements.forEach(element => observer.observe(element));                      // observer chaque élément sélectionné
    };

    observeElements('.project', 0.8);                       //selecteurs cibles
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
