let btn = document.querySelector(".bar");
let btnX = document.querySelector(".x");
let menu = document.querySelector(".main-nav ul")
let nav = document.querySelector(".main-nav");
let up = document.querySelector(".up");

btnX.classList.add("none");
menu.classList.add("hide");

function showMenu() {
    // menu.classList.add("ul-sm");
    menu.classList.remove("hide");
    btn.classList.add("none")
    btnX.classList.remove("none");
}

function hideMenu() {
    // menu.classList.remove("ul-sm");
    menu.classList.add("hide");
    btn.classList.remove("none");
    btnX.classList.add("none");
}



btn.addEventListener("click", showMenu);
btnX.addEventListener("click", hideMenu);

window.addEventListener("scroll", () => {
    
    if (document.documentElement.scrollTop < 500) {
        nav.classList.remove("shadow");
        up.classList.remove("flex");
    }
    else if (document.documentElement.scrollTop > 500) {
        nav.classList.add("shadow");
        up.classList.add("flex");
    }
});

let mainTitleH = document.querySelector(".main-title h2");
let mainTitleP = document.querySelector(".main-title p");

mainTitleH.style.textTransform = "uppercase";
mainTitleP.style.textTransform = "capitalize";

function goTop() {
    window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: "smooth"
        }
    )
}

up.addEventListener("click", goTop)