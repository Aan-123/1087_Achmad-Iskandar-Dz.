window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')){
        form.reset()
    }
}

// section
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLinks.forEach((link) => {
                        link.classList.remove("active");
                        if (link.getAttribute("href").substring(1) === entry.target.id) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        },
        { threshold: 0.5 } 
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});

// sapaan

document.addEventListener("DOMContentLoaded", function () {
    const sapaButton = document.getElementById("sapaAku");
    const sapaText = document.querySelector(".sapaan");

    sapaButton.addEventListener("click", function (event) {
        event.preventDefault(); 

        const now = new Date();
        const hours = now.getHours();
        let sapaan = "";

        if (hours >= 6 && hours < 12) {
            sapaan = "MORNING GUYSSS! 🌞 Selamat mengawali hari yang indah😉";
        } else if (hours >= 12 && hours < 18) {
            sapaan = "SIANG GUYSSS! ☀️ Semangat menjalani aktivitasnya💪";
        } else {
            sapaan = "GOOD NIGHT ALL! 🌙 Selamat istirahat semuanya😊😴";
        }

        sapaText.textContent = sapaan; 
        sapaText.classList.remove("show"); 
        void sapaText.offsetWidth; 
        sapaText.classList.add("show"); 

        setTimeout(() => {
            sapaText.classList.remove("show");
        }, 3000);
    });
});


// switch logo
document.addEventListener("DOMContentLoaded", function () {
    const logoPerjalanan = document.getElementById("logoPerjalanan");

    const logos = [
        "KOMPONEN_IMAGE/LOGO UNEJ.png",
        "KOMPONEN_IMAGE/LOGO FASILKOM.png",
        "KOMPONEN_IMAGE/LOGO MACO.png",

    ];

    let index = 0;

    setInterval(() => {
        logoPerjalanan.style.opacity = "0"; 
        setTimeout(() => {
            index = (index + 1) % logos.length; 
            logoPerjalanan.src = logos[index];
            logoPerjalanan.style.opacity = "1"; 
        }, 500);
    }, 3000);
});



