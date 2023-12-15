const selcId=document.querySelectorAll(".Btn__Menu");
const crearGrilla= document.querySelector(".contenedor__grillas");

// --TRAER PROMESA (JSON), CREAR FUNCION PARA FILTRAR POR CATEGORIA Y LLAMAR LA FUNCION DE CREAR GRILLA-----

let url="https://solter.pythonanywhere.com/productos"
 fetch(url)
.then(response=>response.json())
.then(datos => {   
  grilla(datos)
  selcId.forEach(select=>{
       select.addEventListener("click",(e)=>{
               
          if(e.currentTarget.id !="Todos"){
            console.log(e.currentTarget.id)
           const filtrarBtn= datos.filter(dato => dato.categoria === e.currentTarget.id );
           console.log(filtrarBtn)
           
           grilla(filtrarBtn)          
          }else{ grilla(datos)}
        
      })     
    })   
  
  })


//------------CREAR LA FUNCION DE GRILLA DINAMICA-------
   
    export function grilla (x){   
        crearGrilla.innerHTML=""
          x.forEach(item =>{    
               const plantilla=  
                      `<div id="${item.categoria}" class="grilla__Procuto">
                           <div class="img__paraGrilla" ><img class="imgGrilla" src="${item.imagen}"></div>
                           <div class="grilla__descripcion"> ${item.marca} <p class="texto__grilla-descripcion"> 
                            ${item.descripcion}</p></div>
                           <h2 class="grilla__precio">Precio ${item.precio}</h2>
                           <button  id="${item.id}" class="grilla__btnComprar">COMPRAR</button>
                       </div> `;                     
               crearGrilla.insertAdjacentHTML('afterbegin',plantilla);         
          })
          btnComprarFuncional(x)
        }
          
// CREAR LA FUNCION PARA SACAR DATOS DE GRILLA Y REDIRIGIRLOS A NUEVA PAGINA---





function btnComprarFuncional (x){
  console.log(x)
  
  const btnComprar= document.querySelectorAll(".grilla__btnComprar");
  btnComprar.forEach(btnComprarId =>{
    btnComprarId.addEventListener("click", (e)=>{
        const id = e.currentTarget.id 
        console.log(id)
        var arrayProducto = x.find((articulo)=> articulo.id == id)        
        console.log(arrayProducto)
         localStorage.setItem("datos-producto",JSON.stringify(arrayProducto))
         console.log (arrayProducto)
            e=window.location.href ="../html/compra-producto.html";      
    })
  })
}





  