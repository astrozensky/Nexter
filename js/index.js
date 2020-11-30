

function toggleNav() {
    var mainNav = document.querySelector(".main-nav");
    if (mainNav.classList.contains("main-nav--visible")) {
        mainNav.classList.remove("main-nav--visible");
    }
    else {
        
        mainNav.classList.add("main-nav--visible");
    }
}