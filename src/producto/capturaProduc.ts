import { IProducto } from "./iProducto"
import { rating } from "./iProducto"
export const capturaDatos =()=>{
    const ratin: rating={
        rate: Number(document.querySelector<HTMLInputElement>(`#ancho`)?.value),
        count:Number(document.querySelector<HTMLInputElement>(`#largo`)?.value)
    }
    
    const producto:IProducto={
        price: document.querySelector<HTMLInputElement>("#price")!.value,
        title: document.querySelector<HTMLInputElement>(`#title`)!.value,
        description: document.querySelector<HTMLInputElement>(`#description`)!.value,
        category: document.querySelector<HTMLInputElement>(`#category`)!.value,
        image: document.querySelector<HTMLInputElement>(`#image`)!.value,
        rating: ratin,
    }
return producto;
    }

