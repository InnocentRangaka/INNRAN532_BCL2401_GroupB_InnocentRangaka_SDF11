const menuBtn = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
});

const featuresSection = document.getElementById("features");
const features = featuresSection.querySelectorAll(".feature");

features.forEach(feature => {
    feature.addEventListener("mouseover", function(){
        const svgBox = this.querySelector("svg").parentElement;
        svgBox.classList.add("bg-pink-500");
        svgBox.classList.remove("bg-green-500");
    });

    feature.addEventListener("mouseleave",function(){
        const svgBox = this.querySelector("svg").parentElement;
        svgBox.classList.add("bg-green-500");
        svgBox.classList.remove("bg-pink-500");
    });
});