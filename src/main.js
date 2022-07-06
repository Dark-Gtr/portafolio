const html = document.querySelector("html");
const arrayColorTheme = []
const colorTheme1 = [ '#FF9014','#E86413',"#ff5722", '#E82513', '#FF1443']
const colorTheme2 = [ '#0C96EB','#0B57E0',"#00bcd4", '#0CEBC7', '#0BE082']
const colorTheme3 = ['#187002','#37FC05','#1b8700','#25af04','#209603']
arrayColorTheme.push(colorTheme1)
arrayColorTheme.push(colorTheme2)
arrayColorTheme.push(colorTheme3)



// Aquí se implementa el tema de colores´
const selectColor = (colorTheme) => {
    
    html.style.setProperty('--main-color-down2', `${colorTheme[0]}`);
    html.style.setProperty('--main-color-down', `${colorTheme[1]}`);
    html.style.setProperty("--main-color", `${colorTheme[2]}`);
    html.style.setProperty('--main-color-up', `${colorTheme[3]}`);
    html.style.setProperty('--main-color-up2', `${colorTheme[4]}`)
    localStorage.setItem('current-color', JSON.stringify(colorTheme))  
}

if (JSON.parse(localStorage.getItem('current-color'))) {
    selectColor(JSON.parse(localStorage.getItem('current-color')))
} else {
    selectColor(colorTheme1)
}

//Efectos de sonido
const activateCvContainer = () => {
    const pushButtonSound = document.createElement('audio');
    pushButtonSound.src = './src/pushButton.mp3';
    pushButtonSound.preload = 'auto';

    const buttons = document.querySelectorAll('.header__user--CV');
    if (html.clientWidth >= 1024) {
        buttons.forEach(button => {
            button.onclick = () => {
                pushButtonSound.play();
                document.querySelector(".pdf-main__container").classList.toggle('pdf-active');
            }
        });

        const buttonClose = document.querySelector(".button-close__pdf-container");
        buttonClose.onclick = () => {
            document.querySelector(".pdf-main__container").classList.toggle('pdf-active');
        }
    } else {
        buttons.forEach(button => {
            button.onclick = () => {
                pushButtonSound.play();
                const download = document.createElement("a");
                download.href = "./src/curriculum.pdf";
                download.download = "CV.pdf";
                download.click();
            }  
        })
    }
    
}

activateCvContainer();

const partiCulas = () => {
    const sparkContainer = document.querySelector('.spark-spam__container');

    if (screen.width < 1024) {
        for (let i = 0; i < 20; i++) {
            const spark = document.createElement('span');
            let randomYpos = Math.random() * (400 - 120) + 120;
            let randomXpos = Math.random() * (70 - 20) + 20;
            const randomZise = Math.floor(Math.random() * (13 - 5) + 5);
            let outsetShadow;
            let insetShadow = 5;
            //const randomHeight = Math.floor(Math.random() * (10 - 5) + 5);
            switch (randomZise) {
                case 5:
                    insetShadow = 0.5;
                    outsetShadow = 5;
                    break;
                case 6:
                    insetShadow = 1;
                    outsetShadow = 5;
                    break;

                case 7:
                    insetShadow = 2;
                    outsetShadow = 5;
                    break;
                
                case 8:
                    insetShadow = 3;
                    outsetShadow = 6;
                    break;
                
                case 9:
                    insetShadow = 4;
                    outsetShadow = 6;
                    break;
            
                default:
                    insetShadow = 5;
                    outsetShadow = 7;
                    break;
            }
    
            let test;
            if (Math.random() < 0.5) {
                test = '-';
            } else{
                test = '';
            }
            let randomDelay = Math.random() * (3000 - 1000) + 1000;
            
            spark.style.display = 'inline-block'
            spark.style.width = `${randomZise}px`
            spark.style.height = `${randomZise}px`
            spark.style.backgroundColor = 'white'
            spark.style.borderRadius = '50%'
            spark.style.boxShadow = `0px 0px 10px ${outsetShadow}px var(--main-color), inset 0px 0px ${insetShadow}px 0.5px var(--main-color)`;
            
            spark.animate([
                {transform: 'translate(0px, 0px)'},
                {transform: `translate(${test}${randomXpos}px,-${randomYpos / 2}px)`},
                {transform: `translate(0px, -${randomYpos}px)`}
            ], {duration: 2000, delay: randomDelay, iterations: Infinity, easing: 'linear'})

            sparkContainer.appendChild(spark)
        }
    } else {
        for (let i = 0; i < 180; i++) {
            const spark = document.createElement('span');
            let randomYpos = Math.random() * (600 - 120) + 120;
            let randomXpos = Math.random() * (70 - 20) + 20;
            const randomZise = Math.floor(Math.random() * (13 - 5) + 5);
            let outsetShadow;
            let insetShadow = 5;
            //const randomHeight = Math.floor(Math.random() * (10 - 5) + 5);
            switch (randomZise) {
                case 5:
                    insetShadow = 0.5;
                    outsetShadow = 5;
                    break;
                case 6:
                    insetShadow = 1;
                    outsetShadow = 5;
                    break;

                case 7:
                    insetShadow = 2;
                    outsetShadow = 5;
                    break;
                
                case 8:
                    insetShadow = 3;
                    outsetShadow = 6;
                    break;
                
                case 9:
                    insetShadow = 4;
                    outsetShadow = 6;
                    break;
            
                default:
                    insetShadow = 5;
                    outsetShadow = 7;
                    break;
            }
    
            let test;
            if (Math.random() < 0.5) {
                test = '-';
            } else{
                test = '';
            }
            let randomDelay = Math.random() * (3000 - 1000) + 1000;
            
            spark.style.display = 'inline-block'
            spark.style.width = `${randomZise}px`
            spark.style.height = `${randomZise}px`
            spark.style.backgroundColor = 'white'
            spark.style.borderRadius = '50%'
            spark.style.boxShadow = `0px 0px 10px ${outsetShadow}px var(--main-color), inset 0px 0px ${insetShadow}px 0.5px var(--main-color)`;
            
            spark.animate([
                {transform: 'translate(0px, 0px)'},
                {transform: `translate(${test}${randomXpos}px,-${randomYpos / 2}px)`},
                {transform: `translate(0px, -${randomYpos}px)`}
            ], {duration: 2000, delay: randomDelay, iterations: Infinity, easing: 'linear'})
            
            sparkContainer.appendChild(spark)
        }
    }
    
}

partiCulas();


//funcion para activar los estilos que corresponden al menu
const activateMenu = () => {
    const showTemeContainer = document.querySelector('.header-temeSelector__container')
    document.querySelector(".main-header__container").classList.toggle('main-header__container--visible');
    document.querySelector(".header-nav__container").classList.toggle("header-nav__container--visible");
    document.querySelector(".nav").classList.toggle("nav-active");
    showTemeContainer.classList.toggle('show-teme-container')
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
    mainList[i].children[2].onclick = () => {

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

const proyectActivator = () => {
    const button = document.querySelectorAll(".button__proyect-info");
    const infoContainerHeight = document.querySelector(".proyect__image").clientHeight;
    const infoContainerWidth = document.querySelector(".proyect__image").clientWidth;
    const proyectInfoContainer = document.querySelectorAll(".proyect-info--container");

    let interruptor = false;

    button.forEach(item => {
        item.onclick = () => {
            if (item.nextElementSibling.clientWidth > 1) {
                item.nextElementSibling.style.width = `0px`;
                item.nextElementSibling.style.height = `0px`;
                item.nextElementSibling.style.borderBottomRightRadius = "30px";
            } else {
                item.nextElementSibling.style.width = `${infoContainerWidth}px`;
                item.nextElementSibling.style.height = `${infoContainerHeight}px`;
                item.nextElementSibling.style.borderBottomRightRadius = "0px";
                
                
            }
            
        }
    });
    
    
}

proyectActivator();


const buttonCarrousel = () => {
    const buttonRight = document.querySelector(".button__carrousel--right");
    const buttonLeft = document.querySelector(".button__carrousel--left");
    const slider = document.querySelector(".portfolio__proyects--carrousel");

    const slid = 83;
    const maxSlid = (slider.childElementCount - 1);
    let currentSlid = 0;
    
    if (slider.childElementCount <= 1) {
        buttonLeft.style.visibility = "collapse";
        buttonRight.style.visibility = "collapse";
        document.querySelector(".portfolio__proyects--container").style.overflow = "hidden"
    }

    buttonRight.onclick = () => {
        if (currentSlid > -(slid * maxSlid)) {
            currentSlid -= slid;
            slider.style.transform = `translate(${currentSlid}vw, 0px)`;
            console.log(currentSlid);
        }
    }

    buttonLeft.onclick = () => {
        if (currentSlid < 0) {
            currentSlid += slid
            slider.style.transform = `translate(${currentSlid}vw, 0px)`;
            console.log(currentSlid);
        }
    }

    
}

buttonCarrousel();

//-------------Aqui empieza el codigo para el selector de temas
const activateTemeSelector = () =>{
    document.querySelector('.temes-container').classList.toggle('temes-container-active')
    document.querySelector('.button__temeSelector').classList.toggle('button__temeSelector-active')
}

document.querySelector('.button__temeSelector').addEventListener('click', activateTemeSelector)

const themeItemContainer = document.querySelector('.temes-container')
arrayColorTheme.map((item) => {
    let bufferDiv = document.createElement('div')
    bufferDiv.className = 'item-teme'
    bufferDiv.style.backgroundColor = `${item[2]}`
    bufferDiv.addEventListener('click', () => {selectColor(item)})
    themeItemContainer.appendChild(bufferDiv)
})

const tooltipEnter = (data) => {
    if (!data.target.attributes.alt) {
        
    } else {
        const tooltip = document.querySelector('.tooltip-container')
        document.styleSheets[1].cssRules[33].style.transition = 'width 1s 0.5s, height 1s 0.5s, border 1s 0.5s'
        tooltip.classList.toggle('tooltip-container--active')
        tooltip.children[0].innerText = data.target.attributes.alt.value
        tooltip.style.right = `unset`
        tooltip.style.left = `unset` 

        if (data.clientX > 1024) {
            tooltip.style.right = `${screen.width - (data.clientX + 12)}px`
            
        } else {
            tooltip.style.left = `${data.clientX}px` 
        }
        tooltip.style.top = `${data.clientY}px`
        document.styleSheets[1].cssRules[34].style.width = `${tooltip.scrollWidth}px`
        document.styleSheets[1].cssRules[34].style.height = `${tooltip.scrollHeight}px`
    }
    
}

const tooltipLeave = (data) => {
    if (!data.target.attributes.alt) {
        
    } else {
        const tooltip = document.querySelector('.tooltip-container')
        tooltip.classList.toggle('tooltip-container--active')
        document.styleSheets[1].cssRules[33].style.transition = 'width 1s 0s, height 1s 0s'

    }
}

const searchLabels = () => {
    const buttons = document.querySelectorAll('button')
    buttons.forEach((item) => {
        item.addEventListener('mouseenter', (data) => tooltipEnter(data))
        item.addEventListener('mouseleave', (data) => tooltipLeave(data))
        console.log(item);
    })

    document.querySelector('.header__user--name').addEventListener('mouseenter', (data) => tooltipEnter(data))
    document.querySelector('.header__user--name').addEventListener('mouseleave', (data) => tooltipLeave(data))

}

searchLabels()

