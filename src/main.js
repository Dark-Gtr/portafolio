const colorTheme2 = [ '#FF9014','#E86413',"#ff5722", '#E82513', '#FF1443']
const colorTheme1 = [ '#0C96EB','#0B57E0',"#00bcd4", '#0CEBC7', '#0BE082']

// Aquí se implementa el tema de colores
let html = document.querySelector("html");
html.style.setProperty('--main-color-down2', `${colorTheme1[0]}`);
html.style.setProperty('--main-color-down', `${colorTheme1[1]}`);
html.style.setProperty("--main-color", `${colorTheme1[2]}`);
html.style.setProperty('--main-color-up', `${colorTheme1[3]}`);
html.style.setProperty('--main-color-up2', `${colorTheme1[4]}`)


//Efectos de sonido
const pushButtonSound = document.createElement('audio');
pushButtonSound.src = '../assets/pushButton.mp3';
pushButtonSound.preload = 'auto';

document.querySelector('.header__user--CV').onclick = () => {
    pushButtonSound.play()
}

/* alert(`componer el menu con un z-index ya que la seccion estar esta sobre puesta, 
    arreglar el width y heigh de spark ya que cuando son muchos se reduce el tamaño,
    iniciar la animacion de spark con la particula oculta
`) */

const partiCulas = () => {
    const sparkContainer = document.querySelector('.spark-spam__container');

    if (html.clientWidth < 1024) {
        for (let i = 0; i < 20; i++) {
            const spark = document.createElement('span');
            let randomYpos = Math.random() * (400 - 120) + 120;
            let randomXpos = Math.random() * (70 - 20) + 20;
    
            let test;
            if (Math.random() < 0.5) {
                test = '-';
            } else{
                test = '';
            }
            let randomDelay = Math.random() * (3000 - 1000) + 1000;
            
            spark.style.display = 'inline-block';
            spark.style.width = '8px';
            spark.style.height = '10px';
            spark.style.backgroundColor = 'white'
            spark.style.borderRadius = '50%'
            spark.style.boxShadow = '0px 0px 10px 7px var(--main-color), inset 0px 0px 5px 0.5px var(--main-color)';
            spark.animate([
                {transform: 'translate(0px, 0px)'},
                {transform: `translate(${test}${randomXpos}px,-${randomYpos / 2}px)`},
                {transform: `translate(0px, -${randomYpos}px)`}
            ], {duration: 2000, delay: randomDelay, iterations: Infinity, easing: 'linear'});

            /* spark.animate([
                {boxShadow: '0px 0px 10px 3px var(--main-color), inset 0px 0px 7px 0.5px var(--main-color)', backgroundColor: 'white'},
                {boxShadow: '0px 0px 10px 7px var(--main-color), inset 0px 0px 5px 0.5px var(--main-color)', backgroundColor: 'white'}
            ], {duration: 500, iterations: Infinity, direction: 'alternate', delay: randomDelay}) */
            sparkContainer.appendChild(spark)
        }
    } else {
        for (let i = 0; i < 180; i++) {
            const spark = document.createElement('span');
            let randomYpos = Math.random() * (600 - 120) + 120;
            let randomXpos = Math.random() * (70 - 20) + 20;
    
            let test;
            if (Math.random() < 0.5) {
                test = '-';
            } else{
                test = '';
            }
            let randomDelay = Math.random() * (3000 - 1000) + 1000;
            
            spark.style.display = 'inline-block'
            spark.style.width = '8px'
            spark.style.height = '10px'
            spark.style.backgroundColor = 'white'
            spark.style.borderRadius = '50%'
            spark.style.boxShadow = '0px 0px 10px 7px var(--main-color), inset 0px 0px 5px 0.5px var(--main-color)';
            
            spark.animate([
                {transform: 'translate(0px, 0px)'},
                {transform: `translate(${test}${randomXpos}px,-${randomYpos / 2}px)`},
                {transform: `translate(0px, -${randomYpos}px)`}
            ], {duration: 2000, delay: randomDelay, iterations: Infinity, easing: 'linear'})
            /* spark.animate([
                {boxShadow: '0px 0px 10px 7px var(--main-color), inset 0px 0px 5px 0.5px var(--main-color)', backgroundColor: 'white'},
                {boxShadow: '0px 0px 10px 7px var(--main-color), inset 0px 0px 5px 0.5px var(--main-color)', backgroundColor: 'white'}
            ], {duration: 500, iterations: Infinity, direction: 'alternate', delay: randomDelay}) */
            sparkContainer.appendChild(spark)
    
        }
    }
    
}

partiCulas();

console.log(document.querySelector('.spark-spam__container').childElementCount);
//funcion para activar los estilos que corresponden al menu
const activateMenu = () => {
    document.querySelector(".main-header__container").classList.toggle('main-header__container--visible');
    document.querySelector(".header-nav__container").classList.toggle("header-nav__container--visible");
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
        /* let b = 0;
        while (b < mainList.length) {
            mainList[b++].className = "list";
        } */ // esto está en prueba

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
    const deadZone = 460;
    if (window.scrollY < (height - deadZone) && switchHome === false) {
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
    if(window.scrollY >= height && window.scrollY < ((height * 2) - deadZone) && switchAbout === false){
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
    if (window.scrollY > ((height * 2) - 150) && window.scrollY < ((height * 3) - deadZone) && switchPortfolio === false) {
        switchHome = false;
        switchAbout = false;
        switchPortfolio = true;
        switchContact = false;

        if (mainList[0].classList.length > 1) {
            mainList[0].classList.toggle('list-active');
        }

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

        if (mainList[0].classList.length > 1) {
            mainList[0].classList.toggle('list-active');
        }

        if (mainList[2].classList.length > 1) {
            mainList[2].classList.toggle('list-active');
        }
        
        if (mainList[3].classList.length != 2) {
            mainList[3].classList.toggle('list-active');
        }
        
    }
}

window.onscroll = activateListByScroll;

