
// =========================
// DARK MODE
// =========================

const themeToggle = document.getElementById("themeToggle");

if(themeToggle){

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            themeToggle.innerHTML = "☀️";
        }else{
            themeToggle.innerHTML = "🌙";
        }

    });

}


// =========================
// IMPACT COUNTERS
// =========================

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target =
        +counter.getAttribute("data-target");

        const updateCounter = () => {

            const current =
            +counter.innerText;

            const increment =
            Math.ceil(target / 100);

            if(current < target){

                counter.innerText =
                Math.min(current + increment, target);

                setTimeout(updateCounter, 20);

            }else{

                counter.innerText = target;

            }
        };

        updateCounter();
    });
};

startCounters();


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const sections =
document.querySelectorAll("section");

const revealSections = () => {

    sections.forEach(section => {

        const sectionTop =
        section.getBoundingClientRect().top;

        const revealPoint =
        window.innerHeight - 100;

        if(sectionTop < revealPoint){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });
};

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealSections);

revealSections();


// =========================
// VOLUNTEER MODAL
// =========================

// =========================
// VOLUNTEER MODAL
// =========================

const modal =
document.getElementById("volunteerModal");

const openModal =
document.getElementById("openModal");

const closeModal =
document.getElementById("closeModal");

if(openModal && closeModal && modal){

    openModal.addEventListener("click", () => {

        modal.style.display = "block";

    });

    closeModal.addEventListener("click", () => {

        modal.style.display = "none";

    });

    window.addEventListener("click", (e) => {

        if(e.target === modal){

            modal.style.display = "none";

        }

    });

}

// =========================
// TESTIMONIAL SLIDER
// =========================

const testimonials = [

    {
        text: "Volunteering with NayePankh Foundation transformed my perspective and helped me contribute to meaningful social impact.",
        author: "- Volunteer"
    },

    {
        text: "The foundation's education initiatives have positively affected hundreds of children in our community.",
        author: "- Supporter"
    },

    {
        text: "Being part of the food distribution campaign was one of the most rewarding experiences of my life.",
        author: "- Team Member"
    }

];

let testimonialIndex = 0;

const testimonialText =
document.querySelector(".testimonial p");

const testimonialAuthor =
document.querySelector(".testimonial h4");

function changeTestimonial(){

    testimonialIndex++;

    if(testimonialIndex >= testimonials.length){

        testimonialIndex = 0;

    }

    testimonialText.textContent =
    testimonials[testimonialIndex].text;

    testimonialAuthor.textContent =
    testimonials[testimonialIndex].author;
}

setInterval(changeTestimonial, 4000);


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const header =
document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background =
        "rgba(15,23,42,0.95)";

    }else{

        header.style.background =
        "rgba(255,255,255,0.1)";

    }

});


// =========================
// SMOOTH SCROLL
// =========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// =========================
// PAGE LOADED EFFECT
// =========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

