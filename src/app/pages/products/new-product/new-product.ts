import { Component } from "@angular/core";
import { Producto } from "../../../models/producto";
import { FormControl, FormGroup,ReactiveFormsModule, Validators} from "@angular/forms";

/*FormControl: Controlador de cada dato ingresado en el formulario
FormGroup: Directiva para formularios reactivos en angular, agrupa FormControl
ReactiveFormsModule: permite hacer uso de formularios reactivos
Validators: Valida datos ingresados en el formularo*/

@Component({
  selector: 'app-new-product',
  imports: [ReactiveFormsModule],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css'
})
export class NewProduct {
  //Propiedad PRIVADA -> Información sensible
  private contadorId = 1

  //Colección de productos de tipo Producto
  coleccionProducto: Producto [] = [];

  //Instancia que se vincula con el formulario desde HTML
  //nombrePropiedad: new Control
  //string -> `` / number -> null
  //Validators.required -> validado como valor requerido estrictamente
  nuevoProducto = new FormGroup ({
    nombre: new FormControl (``, Validators.required),
    descripcion: new FormControl (``, Validators.required),
    precio: new FormControl (null, Validators.required),
    img: new FormControl (``),
    alt: new FormControl (``)
  });
  
  /**
   * @description Método de creación de productos segun interfaz "Producto"
   */
  crearProducto (): void{
    if (this.nuevoProducto.valid){
      const nuevoProducto: Producto = {
        /*ID -> asignamos contador para que sea autoincrementable*/
        id: this.contadorId++,
        /**
         * resto de propiedades, asignamos desde el formulario el valor que se recibió desde su casilla o formControlName
         */
        nombre: this.nuevoProducto.value.nombre!,
        descripcion: this.nuevoProducto.value.descripcion!,
        precio: this.nuevoProducto.value.precio!
      }
      this.coleccionProducto.push(nuevoProducto)

      console.log ("Producto agregado ", nuevoProducto);
      console.log ("Colección actual de productos: ", this.coleccionProducto);

        /**
         * Reseteamos el formulario
         */
        this.nuevoProducto.reset()
      
    }
  }

}
