document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(sect => {
            if (sect.isIntersecting) {
                sect.target.style.opacity = 1;
                sect.target.style.transform = 'translateY(0)';
            } else {
                sect.target.style.opacity = 0;
                sect.target.style.transform = 'translateY(20px)';
            }
        });
    }, );

    sections.forEach(section => {
        observer.observe(section);
    });


    
});

