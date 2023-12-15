

var imagen =new Array("img/imagenes/img1.jpg","img/imagenes/img2.jpg",
"img/imagenes/img3.jpg","img/imagenes/img4.jpg");

var posicion=0;
var img=document.querySelector(".img");

img.style.backgroundImage='url('+ imagen[posicion] +')';
var izquierda=document.querySelector(".Btn__Izquierda");
var derecha= document.querySelector(".Btn__Derecha")

izquierda.addEventListener("click", function(){
    if(posicion==0){
        posicion=3;
    }else{ posicion --}
    img.style.backgroundImage='url('+ imagen[posicion] +')';
});


derecha.addEventListener("click", function(){
    if(posicion==3){
        posicion=0;
    }else{ posicion ++}
    img.style.backgroundImage='url('+ imagen[posicion] +')';
});

setInterval(()=>{
    
        if(posicion==3){
            posicion=0;
        }else{ posicion ++}
        img.style.backgroundImage='url('+ imagen[posicion] +')';
},3000);
