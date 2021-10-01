const slide = new Array("img/bar_la_loupiote/la_loupiote_1.png", "img/bar_la_loupiote/la_loupiote_2.png", "img/bar_la_loupiote/la_loupiote_3.png", "img/bar_la_loupiote/la_loupiote_4.png");
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}