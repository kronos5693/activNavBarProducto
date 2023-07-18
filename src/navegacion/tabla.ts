import { IProducto } from "../producto/iProducto";


export function generarTablaProductos(
	productos: IProducto[],
	div: HTMLDivElement
) {
	if (productos.length === 0) {
		console.error('NO SE ENCONTRARON DATOS');
		return;
	}
	// obtengo los encabezados con las key del array de datos
	const encabezados: (keyof IProducto)[] = Object.keys(
		productos[0]
	) as (keyof IProducto)[];

	// creo la tabla html y agrego clase css
	const tabla = document.createElement('table');
	tabla.classList.add('table', 'table-striped');

	// creo la fila de encabezados <thead>
	const thead = document.createElement('thead');
	const encabezadosRow = document.createElement('tr');

	// por cada key dentro de usuarios creo un elemento <th>

	encabezados.forEach((e) => {
		const th = document.createElement('th');
		th.textContent = e;
		encabezadosRow.appendChild(th);
	});
 
	// agrego los encabezados a la tabla es de decir los th
	thead.appendChild(encabezadosRow);
	tabla.appendChild(thead);

	// Crear filas de datos
	const tbody = document.createElement('tbody');

	// itero sobre array de datos
	productos.forEach((u) => {
		const fila = document.createElement('tr');
		// itero sobre los encabezados
		encabezados.forEach((e) => {
			const celda = document.createElement('td');
			celda.textContent = u[e]?.toString() || null;
			fila.appendChild(celda);
		});
		tbody.appendChild(fila);
	});
	tabla.appendChild(tbody);

	div.appendChild(tabla);
}