// ====ANIMATIONS====

document.addEventListener('DOMContentLoaded', () => {
    const observeElements = (selector, threshold) => {
        const elements = document.querySelectorAll(selector);
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold });

        elements.forEach(element => observer.observe(element));
    };

    //selecteurs cibles

    observeElements('.project', 0.1);
    observeElements('.soft-skill-icon', 0.5);
    observeElements('#subtitle', 0.2);
    observeElements('#soft-skill-icon-1', 0.2);
    observeElements('#soft-skill-icon-2', 0.2);
    observeElements('#soft-skill-icon-3', 0.2);
});
