
import { navBar } from "./navegacion/navBar";
import { homeNav } from "./navegacion/home";
import { crearProdNav } from "./navegacion/crearProd";
import { mostrarPro } from "./navegacion/mostrarProd";


navBar();

const home = document.querySelector<HTMLAnchorElement>('#home');
const productos = document.querySelector<HTMLAnchorElement>('#productos');
const crearProducto = document.querySelector<HTMLAnchorElement>('#crearProducto');


home?.addEventListener('click', () => {
homeNav();
	productos!.classList.remove('active');
	crearProducto!.classList.remove('active');
	home!.classList.add('active');
});

crearProducto?.addEventListener('click', () => {
crearProdNav();
    productos!.classList.remove('active');
    crearProducto!.classList.remove('active');
    home!.classList.add('active');

    
  });
 
  productos?.addEventListener('click',()=>{
mostrarPro();

  });
  
  
