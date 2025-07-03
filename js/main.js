document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(' .contact-form, .follow-us , .store-section , .who-are-we, .our-vision, .why-us');

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
    let scrollDiv = document.createElement("div");
    scrollDiv.classList.add("scrollDiv");

    let scrollSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    scrollSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    scrollSvg.setAttribute("height", "25")
    scrollSvg.setAttribute("width", "25")
    scrollSvg.setAttribute("viewBox", "0 0 512 512");

    let scrollPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    // #region path
    let dPath = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM385 215c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71L280 392c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-214.1-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 103c9.4-9.4 24.6-9.4 33.9 0L385 215z"
    // #endregion
    scrollPath.setAttribute("fill", "hsl(15, 73%, 60%)")
    scrollPath.setAttribute("d", dPath);

    scrollSvg.append(scrollPath);
    scrollDiv.append(scrollSvg)
    document.body.append(scrollDiv)
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

let themeBtnFlag = false;
themeBtn.addEventListener("click", function () {
    if (!themeBtnFlag) {
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
    themeBtnFlag = !themeBtnFlag;

})

document.addEventListener("scroll", () => {
    let scrollDiv = document.querySelector(".scrollDiv")
    if (window.scrollY >= 100) {
        scrollDiv.classList.add("active");
        scrollDiv.addEventListener("click", () => {
            window.scrollTo(0, 0);
        })

    }
    else if (window.scrollY >= -100) {
        scrollDiv.classList.remove("active");

    }
})
