document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.contact-form, .follow-us , .store-section , .who-are-we, .our-vision, .why-us');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        observer.observe(section);
    });
    let backgroundColor = window.localStorage.getItem("background-color")
    let contentBgColor = window.localStorage.getItem("content-bg-color")
    let mainFontColor = window.localStorage.getItem("main-font-color")

    if (backgroundColor && contentBgColor && mainFontColor) {
        document.documentElement.style.setProperty("--background-color", backgroundColor)
        document.documentElement.style.setProperty("--content-bg-color", contentBgColor)
        document.documentElement.style.setProperty("--main-font-color", mainFontColor)
    } else {
        document.documentElement.style.setProperty("--background-color", "hsl(0,0%,100%)")
        document.documentElement.style.setProperty("--content-bg-color", "hsl(0,0%,95%)")
        document.documentElement.style.setProperty("--main-font-color", "hsl(210, 11%, 15%)")

    }
});

let navBarBrand = document.querySelectorAll('.navbar-brand');
navBarBrand.forEach((el) => {
    el.addEventListener('click', () => {
        window.open("index.html", "_self");
    });
})

let themeBtn = document.querySelector(".theme-btn");
let svgBtns = [themeBtn, ...document.querySelectorAll(".social-icon-link")]
svgBtns.forEach((el) => {

    el.addEventListener("mouseenter", function () {
        let child = this.children[0].children[0];
        child.setAttribute("fill", "hsl(15, 73%, 60%)");

    });
    el.addEventListener("mouseleave", function () {
        let child = this.children[0].children[0];
        child.setAttribute("fill", "hsl(67, 7%, 50%)")
    });
})

let flag = false;
themeBtn.addEventListener("click", function () {
    if (!flag) {
        document.documentElement.style.setProperty("--background-color", "hsl(200, 6%, 10%)")
        document.documentElement.style.setProperty("--content-bg-color", "hsl(195, 6%, 13%)")
        document.documentElement.style.setProperty("--main-font-color", "hsl(36, 10%, 80%)")

        window.localStorage.setItem("background-color", "hsl(200, 6%, 10%)")
        window.localStorage.setItem("content-bg-color", "hsl(195, 6%, 13%)")
        window.localStorage.setItem("main-font-color", "hsl(36, 10%, 80%)")
    } else {
        document.documentElement.style.setProperty("--background-color", "hsl(0,0%,100%)")
        document.documentElement.style.setProperty("--content-bg-color", "hsl(0,0%,95%)")
        document.documentElement.style.setProperty("--main-font-color", "hsl(210, 11%, 15%)")

        window.localStorage.setItem("background-color", "hsl(0, 0%, 100%)")
        window.localStorage.setItem("content-bg-color", "hsl(0, 0%, 95%)")
        window.localStorage.setItem("main-font-color", "hsl(210, 11%, 15%)")
    }
    flag = !flag;

})