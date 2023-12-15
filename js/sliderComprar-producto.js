import{arrayDatos} from "../js/comprar-producto.js"

//-----CREAR SILDER COMPRA DINAMICAMENTE------


function sliderHtml(){ 
var silderContainer= document.querySelector(".Galeria__Container");
var silderCarrito=
`<article class="Galeria">
<div class="Galeria__Imagen-Container">
      <img id="imgPrincipal" class="galeria__imgPrincipal" src="${arrayDatos.imagen}" altt="">
     <div class="Btn__Siguiente"> > </div>
     <div class="Btn__Previo"> < </div>
</div>
<div class="galeria__Miniaturas">
  <img id="img1" class="Galeria__Miniatura " src="${arrayDatos.imagen}" alt="">
  <img id="img2" class="Galeria__Miniatura " src="../img/imagenes/1.jpg" alt="">
  <img id="img3" class="Galeria__Miniatura " src="../img/imagenes/2.jpg" alt="">
  <img id="img1" class="Galeria__Miniatura " src="../img/imagenes/3.jpg" alt="">
</div>
</article>`;
silderContainer.innerHTML= silderCarrito;
}
sliderHtml();



  // CAMBIAR IMAGEN CON BOTONE < >

var ImagenPrincipal= document.querySelector(".galeria__imgPrincipal");
var btnSiguiente=document.querySelector(".Btn__Siguiente");
var btnPrevio= document.querySelector(".Btn__Previo");
var contador= 0;

btnPrevio.addEventListener('click', ()=>{
  if(contador ==0){
    contador=3;
  }else{ contador--};
    ImagenPrincipal.src=arrayDatos.pimg[contador][contador];
 console.log(contador); 
});

  btnSiguiente.addEventListener('click', ()=>{
     if(contador ==3){
       contador=0;
     } else{ contador++};
     ImagenPrincipal.src=arrayDatos.pimg[contador][contador];
     console.log(contador);
})


// SELECCIONAR MINIATURA

var ImagenPrincipal= document.querySelector(".galeria__imgPrincipal");
var selector =document.querySelectorAll(".Galeria__Miniatura");

selector.forEach(boton => {
  boton.addEventListener("click",(e)=>{
    
    selector.forEach(boton=>boton.classList.remove("activa"));
    e.currentTarget.classList.add("activa");
    ImagenPrincipal.src=arrayDatos.imagen=boton.src;
    });
    
  });
  