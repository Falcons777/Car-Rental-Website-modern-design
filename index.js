
// The card animation 
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".offer-container");
    const cards = document.querySelectorAll(".offer-card");

    // Krijimi i një observer që aktivizohet kur seksioni është në ekran
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Kur seksioni është i dukshëm në ekran, aktivizo animacionin
            if (entry.isIntersecting) {
                container.classList.add("active"); // Aktivizo animacionin për containerin
                // Aktivizo animacionin për secilën kartë
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        // Vendos kartat në pozitat e tyre të animuar
                        if (card.classList.contains("left")) {
                            card.classList.add("active", "left");
                        } else if (card.classList.contains("right")) {
                            card.classList.add("active", "right");
                        }
                    }, index * 200); // Vonesë për secilën kartë për efekt më të mirë
                });
                // Pasi të jetë aktivizuar, ndalojmë vëzhgimin e seksionit
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Aktivizohet kur 50% e seksionit është në ekran

    // Aktivizo observimin për seksionin që përmban kartat
    observer.observe(container);
});



// Select all team members
const teamMembers = document.querySelectorAll('.team-member');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add 'visible' class to activate animation
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 }); // Aktivizohet kur 10% e elementit bëhet e dukshme

// Observe each team member
teamMembers.forEach(member => observer.observe(member));

// Add dynamic effects with JavaScript if needed
document.querySelector('.submit-btn').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Thank you for your submission!');
});

function revealOnScroll() {
    const elementsToReveal = document.querySelectorAll('.reveal, .text, .intro, .text2, .car-image');
    const windowHeight = window.innerHeight;

    elementsToReveal.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

// Aktivizimi i animacioneve kur bëhet scroll
window.addEventListener('scroll', revealOnScroll);

// Thirr funksionin një herë në ngarkim të faqes
revealOnScroll();


document.querySelector('.submit-btn').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Thank you for your submission!');
});

function revealOnScroll() {
    const elementsToReveal = document.querySelectorAll('.reveal, .text, .intro, .text2, .car-image');
    const windowHeight = window.innerHeight;

    elementsToReveal.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

// Aktivizimi i animacioneve kur bëhet scroll
window.addEventListener('scroll', revealOnScroll);

// Thirr funksionin një herë në ngarkim të faqes
revealOnScroll();


