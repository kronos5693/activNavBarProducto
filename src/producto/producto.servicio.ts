import axios from "axios";
import { IProducto } from "./iProducto";
const URL='https://fakestoreapi.com/products';


export const crearProducto=async(p:IProducto)=>{
    const response= await axios.post(`${URL}`,p);
    const data: IProducto= response.data
  /*   if(response.status !=201){
      return  console.error('Fallo la llamada a la api crear Producto')
    } */
    return console.log(`Se creo el cliente con id ${data.id}`);
};

export  const  getAllProductos = async (): Promise<IProducto[]> => {
	const { data } = await axios.get<IProducto[]>(`${URL}`);

	return data;

};