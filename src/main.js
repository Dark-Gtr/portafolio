const colorTheme1 = ["#ff5722"]
const colorTheme2 = ["#00bcd4"]

// Aquí se implementa el tema de colores
let html = document.querySelector("html");
html.style.setProperty("--main-color", `${colorTheme1[0]}`);


//funcion para activar los estilos que corresponden al menu
const activateMenu = () => {
    document.querySelector(".main-header").classList.toggle('header-active');
    document.querySelector(".header-hidden").classList.toggle("header-visible");
    document.querySelector(".nav").classList.toggle("nav-active");
}

//funcion para dar scroll asta una seccion en especifico
const scrollToDestino = (numero) => {
    document.querySelector(".main-container").children[numero].scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
}

document.querySelector(".icon__menu-container").onclick = activateMenu;

const mainList = document.querySelectorAll(".list");

for (let i = 0; i < mainList.length; i++) {
    mainList[i].children[0].onclick = () => {
        let b = 0;
        while (b < mainList.length) {
            mainList[b++].className = "list";
        }

        /* mainList[i].classList.toggle("list-active"); */

        if (document.querySelector('html').clientWidth < 1024) {
            activateMenu();
        }
        
        
        scrollToDestino(i);
        
        
    }
    
}

const height = document.querySelector('html').clientHeight;
// Estas variables es para que las funciones se ejecuten una vez
let switchHome = false;
let switchAbout = false;
let switchPortfolio = false;
let switchContact = false;

// Este es para que por defecto home inicie en activado
mainList[0].classList.toggle('list-active');

const activateListByScroll = () => {
    if (window.scrollY < height && switchHome === false) {
        switchHome = true;
        switchAbout = false;
        switchPortfolio = false;
        switchContact = false;

        if (mainList[1].classList.length > 1) {
            mainList[1].classList.toggle('list-active');
        }

        if (mainList[0].classList.length != 2) {
            mainList[0].classList.toggle('list-active');
        }
        

    }
    if(window.scrollY >= height && window.scrollY < (height * 2) && switchAbout === false){
        switchHome = false;
        switchAbout = true;
        switchPortfolio = false;
        switchContact = false;
        
        if (mainList[0].classList.length > 1) {
            mainList[0].classList.toggle('list-active');
        }
        
        if (mainList[1].classList.length != 2) {
            mainList[1].classList.toggle('list-active');
        }

        if (mainList[2].classList.length > 1) {
            mainList[2].classList.toggle('list-active');
        }

        
    }
    if (window.scrollY > (height * 2) && window.scrollY < (height * 3) && switchPortfolio === false) {
        switchHome = false;
        switchAbout = false;
        switchPortfolio = true;
        switchContact = false;

        if (mainList[1].classList.length > 1) {
            mainList[1].classList.toggle('list-active');
        }
        
        if (mainList[2].classList.length != 2) {
            mainList[2].classList.toggle('list-active');
        }
        
        if (mainList[3].classList.length > 1) {
            mainList[3].classList.toggle('list-active');
        }
    }
    if (window.scrollY >= (height * 3) && switchContact === false) {
        switchHome = false;
        switchAbout = false;
        switchPortfolio = false;
        switchContact = true;

        if (mainList[2].classList.length > 1) {
            mainList[2].classList.toggle('list-active');
        }
        
        if (mainList[3].classList.length != 2) {
            mainList[3].classList.toggle('list-active');
        }
        
    }
}

window.onscroll = activateListByScroll;