/* =====================================================
   CO.FRA.GA — SCRIPT PRINCIPAL
===================================================== */


/* =========================
   CURSEUR
========================= */

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    follower.animate(
        {
            left: `${e.clientX - 17}px`,
            top: `${e.clientY - 17}px`
        },
        {
            duration: 400,
            fill: "forwards"
        }
    );

});


/* =====================================================
   01. MENU MOBILE
===================================================== */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


/* =====================================================
   02. FERMER LE MENU APRÈS UN CLIC
===================================================== */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =====================================================
   03. NAVBAR AU SCROLL
===================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =====================================================
   04. ANIMATION AU SCROLL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    observer.observe(element);

});


/* =====================================================
   05. PARALLAX HERO
===================================================== */

const heroVisual =
    document.querySelector(".hero-visual");

const heroGlow =
    document.querySelector(".hero-glow");


window.addEventListener("scroll", () => {

    if (!heroVisual) return;

    const scroll =
        window.scrollY;

    heroVisual.style.transform =
        `translateY(${scroll * 0.08}px)`;

    if (heroGlow) {

        heroGlow.style.transform =
            `translateY(${scroll * 0.04}px)`;

    }

});


/* =====================================================
   06. PARALLAX LOCALISATION
===================================================== */

const locationVisual =
    document.querySelector(".location-visual");

const locationBackground =
    document.querySelector(".location-background");

const locationPerson =
    document.querySelector(".location-person");


window.addEventListener("scroll", () => {

    if (!locationVisual) return;

    const rect =
        locationVisual.getBoundingClientRect();

    const windowHeight =
        window.innerHeight;

    if (
        rect.top < windowHeight &&
        rect.bottom > 0
    ) {

        const progress =
            (windowHeight - rect.top) /
            (windowHeight + rect.height);

        if (locationBackground) {

            locationBackground.style.transform =
                `translateY(${progress * 30 - 15}px) scale(1.05)`;

        }

        if (locationPerson) {

            locationPerson.style.transform =
                `translateX(-50%) translateY(${progress * -12}px)`;

        }

    }

});


/* =====================================================
   07. EFFET HOVER CARTES
===================================================== */

const floatingCards =
    document.querySelectorAll(".floating-card");


floatingCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.zIndex = "20";

    });

    card.addEventListener("mouseleave", () => {

        card.style.zIndex = "";

    });

});


/* =====================================================
   08. TILT 3D DES CARTES
===================================================== */

const tiltCards =
    document.querySelectorAll(
        ".mission-card, .value-card"
    );


tiltCards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 4;

        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =====================================================
   09. ANNÉE AUTOMATIQUE
===================================================== */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =====================================================
   10. LUMIÈRE SUIVANT LA SOURIS
===================================================== */

const interactiveCards =
    document.querySelectorAll(
        ".floating-card, .mission-card, .value-card"
    );


interactiveCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        card.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        card.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    });

});


/* =====================================================
   11. APPARITION DE LA PAGE
===================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});