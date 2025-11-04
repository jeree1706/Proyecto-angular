export interface Producto {
	id: number; //ID <- tipo number para que pueda ser incremental
	img?: string // ? <- Indica que una propiedad no es obligatoria
	alt?: string
	nombre: string
	precio: number
	descripcion: string
}
