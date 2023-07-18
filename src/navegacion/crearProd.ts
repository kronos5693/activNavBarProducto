import { capturaDatos } from "../producto/capturaProduc";
import { IProducto } from "../producto/iProducto";
import { crearProducto } from "../producto/producto.servicio";
export function crearProdNav() {
  const app = document.querySelector<HTMLDivElement>("#app");
  app!.innerHTML = `<h2>CREAR PRODUCTO</h2><br>
	<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Nombre Producto</label>
  <input type="text" class="form-control" id="title" placeholder="Ingrese nombre">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Precio</label>
  <input type="text" class="form-control" id="price" placeholder="Ingrese precio">
</div>

<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Descripcion</label>
  <input type="text" class="form-control" id="description" placeholder="Ingrese Descripcion">
</div>


<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Categoria</label>
  <input type="text" class="form-control" id="category" placeholder="Ingrese Categoria">
</div>


<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">URL Imagen</label>
  <input type="text" class="form-control" id="image" placeholder="Ingrese Url">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Ancho</label>
  <input type="text" class="form-control" id="ancho" placeholder="Ingrese ancho del producto">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Largo</label>
  <input type="text" class="form-control" id="largo" placeholder="Ingrese largo del producto">
</div>

<div class="col-12">
<button type="submit" id="btnIngresar" class="btnIngresar">Ingresar Producto</button>
</div>
 
`;
const btnIngresar =
document.querySelector<HTMLAnchorElement>("#btnIngresar")!;

btnIngresar!.addEventListener('click', (e) => {
    e.preventDefault();
    const producto:IProducto= capturaDatos();
 crearProducto(producto);
  console.log(producto)
        })
}
