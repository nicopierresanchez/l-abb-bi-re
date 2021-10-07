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


const bouton = document.querySelector('#button');

bouton.addEventListener('click', function () {
    
    let txt = document.querySelector("#texte").value;
    let newCommentaire = document.createElement("li");   
    newCommentaire.innerHTML = txt;
    let commentaire = document.querySelector('#commValides');
    commentaire.appendChild(newCommentaire);  
    let ancienTxt = document.getElementById("texte").value = "";      

})


