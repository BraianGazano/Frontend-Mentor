  
let slideActual = 1;
const slides = document.querySelectorAll(".slider");

function mostrarSlide(indiceSlide){
  if (indiceSlide > slides.length){
   slideActual = 1;
  }  
  else if (indiceSlide < 1){
   slideActual = slides.length;
  } 
  else{
   slideActual = indiceSlide;
  } 
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides [slideActual - 1].style.display = 'flex';
}

function siguienteSlide() {
  mostrarSlide(slideActual + 1);
}

function anteriorSlide() {
  mostrarSlide(slideActual - 1);
}

mostrarSlide(slideActual);

const anterior = document.querySelectorAll('.previous');
const siguiente =  document.querySelectorAll('.next');

anterior.forEach(btn => btn.addEventListener("click", anteriorSlide));
siguiente.forEach(btn => btn.addEventListener("click", siguienteSlide));