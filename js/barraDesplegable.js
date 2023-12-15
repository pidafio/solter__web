const BtnMenu = document.querySelectorAll(".Btn__Menu");
const Menu =document.querySelector(".Items__Menu");
const submenuProducto =document.querySelector(".Submenu__Productos")
const BtnSubmenu = document.querySelectorAll(".Btn-Submenu");

//  ----BOTON BARRA LATERAL RESPONSIVE-----

BtnMenu.forEach(botones =>{
   botones.addEventListener("click",()=>{
      Menu.classList.toggle("Mostrar")
      activarDesactivar(submenuProducto)
    })
});

  //-----   BOTONES DESPLEGABLES------   

   BtnSubmenu.forEach(botones=>{      
    botones.addEventListener("click", function (){         
        const SubMenu = this.nextElementSibling;
        const heightSubMenu = SubMenu.scrollHeight;
        activarDesactivar(SubMenu,heightSubMenu)              
    })        
}) 


// ----FUNCION EXTENDER Y GUARDAR LISTADOS-----

function activarDesactivar(x , y){
   if(x.classList.contains("desplegar")){
      x.classList.remove("desplegar");
      x.removeAttribute("style");
    
   }else{
      x.classList.add("desplegar");
      x.style.height= y +"px";
     
   }

}


