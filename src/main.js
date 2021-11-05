const colorTheme1 = ["#ff5722"]
const colorTheme2 = ["#00bcd4"]

let html = document.querySelector("html");
html.style.setProperty("--main-color", `${colorTheme1[0]}`);
let buttonMenu = document.querySelector(".icon__menu-container");


const activateMenu = () => {
    document.querySelector(".main-header").classList.toggle('header-active');
    document.querySelector(".header-hidden").classList.toggle("header-visible");
    document.querySelector(".nav").classList.toggle("nav-active");
}

const scrollToDestino = (numero) => {
    document.querySelector(".main-container").children[numero].scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
}

buttonMenu.onclick = activateMenu

const mainList = document.querySelectorAll(".list");

for (let i = 0; i < mainList.length; i++) {
    mainList[i].children[0].onclick = () => {
        let b = 0;
        while (b < mainList.length) {
            mainList[b++].className = "list";
        }

        mainList[i].classList.toggle("list-active")
        
        /* html.scrollT({
            top: (totalHeigth / mainList.length) * i,
            behavior: "smooth"
        }) */
        activateMenu()
        
        scrollToDestino(i)
        
        
    }
    
}