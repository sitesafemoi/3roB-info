// Slider

const ContSlider = document.querySelector(".cont-slider")
const ImgSlider = document.querySelectorAll(".img-slider")
const ArrowLeft = document.querySelector(".arrow-left")
const ArrowRight = document.querySelector(".arrow-right")

let i = 0;

ArrowLeft.addEventListener(`click`, () => {
    if (i==0){
        ImgSlider[0].classList.toggle(`enabled`)
        ImgSlider[1].classList.toggle(`enabled`)
        i++;
        return
    }
    if(i==3){
        ImgSlider[0].classList.toggle(`enabled`)
        ImgSlider[2].classList.toggle(`enabled`)
        i = 0;
        return
    }
})

ArrowRight.addEventListener(`click`, () => {
    if (i==0){
        ImgSlider[0].classList.toggle(`enabled`)
        ImgSlider[2].classList.toggle(`enabled`)
        i = i + 3 ;
        return
    }
    if (i==1){
        ImgSlider[0].classList.toggle(`enabled`)
        ImgSlider[1].classList.toggle(`enabled`)
        i++;
        return
    }
    if (i==2){
        ImgSlider[0].classList.toggle(`enabled`)
        ImgSlider[2].classList.toggle(`enabled`)
        i++;
        return
    }
})

// ContSlider.style.transform = "transalateX(-200%)"