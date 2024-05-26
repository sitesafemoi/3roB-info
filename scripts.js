// *Slider

const ContSlider = document.querySelector(".cont-slider")
const ImgSlider = document.querySelectorAll(".img-slider")
const ArrowLeft = document.querySelector(".arrow-left")
const ArrowRight = document.querySelector(".arrow-right")

let i = 0;

// Cambio automatico
setInterval(() => {
    switch (i) {
        case 0:
            PasarPrimeraIMG();
        break;
        case 1:
            PasarPrimeraIMG();
        break;
        case 2:
            PasarSegundaIMG();
            i++;
        break;
        case 3:
            PasarSegundaIMG();
            i=0;
        break;
        default:
            i=0;
            break;
    }
}, 5000);



function PasarPrimeraIMG ()  {
    ImgSlider[0].classList.toggle(`enabled`)
    ImgSlider[1].classList.toggle(`enabled`)
    i++;
}
function PasarSegundaIMG ()  {
    ImgSlider[0].classList.toggle(`enabled`)
    ImgSlider[2].classList.toggle(`enabled`)
}

//Cambio con click

ArrowLeft.addEventListener(`click`, () => {

    switch (i) {
        case 0:
            PasarPrimeraIMG();
            break;
        case 3:
            PasarSegundaIMG();
            i = 0;
         break;
        default:
            i==0;
          break;
      }
})

ArrowRight.addEventListener(`click`, () => {

    switch (i) {
        case 0:
            PasarSegundaIMG();
            i = i + 3 ;
            break;
        case 1:
            PasarPrimeraIMG();
          break;
        case 2:
            PasarSegundaIMG();
            i++;
            break;
        default:
            i==0;
          break;
      }

})

//*  Galeria 

const ContGaleria = document.querySelector(".cont-full-galeria")
const fullImg = document.querySelectorAll("#full-img")


function closeIMG() {
    ContGaleria.style.display = `none`;
}

function openIMG(reference) {
    ContGaleria.style.display = `grid`;
    
    console.log(reference)
    
    fullImg.src = reference;
    console.log(fullImg.src)
}