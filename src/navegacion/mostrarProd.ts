
import { getAllProductos } from "../producto/producto.servicio";
import { generarTablaProductos } from "./tabla";


export async function  mostrarPro()  {
    const app = document.querySelector<HTMLDivElement>("#app");
    app!.innerHTML = `<h2>MOSTRANDO PRODUCTOS</h2><br><br>
     <div id="tabla"></div>
   
  `
  const  productos  = await  getAllProductos();
 const divTabla=document.querySelector(`#tabla`) as HTMLDivElement;
generarTablaProductos(productos,divTabla);


  }
  
