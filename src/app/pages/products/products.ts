// Importa los elementos necesarios desde Angular y el modelo "Tarjeta"
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';

// Decorador que define el componente de Angular
@Component({
  // Nombre del selector para usar el componente en HTML (por ejemplo <app-products>)
  selector: 'app-products',

  // Importa módulos necesarios (en este caso, CommonModule para usar *ngFor, *ngIf, etc.)
  imports: [CommonModule],

  // Ruta del archivo HTML que define la estructura visual del componente
  templateUrl: './products.html',

  // Ruta del archivo CSS que define los estilos del componente
  styleUrl: './products.css'
})

// Clase principal del componente (representa la lógica de la sección "Productos")
export class Products {

  // Propiedad pública que almacena un arreglo de objetos tipo Tarjeta
  // Se utiliza para mostrar la información de cada producto en pantalla
  public infoTarjeta: Tarjeta[];

  // Constructor de la clase (se ejecuta al crear el componente)
  constructor() {

    // Asignación de datos a la propiedad infoTarjeta
    // Cada objeto representa una tarjeta o producto con su información
    this.infoTarjeta = [
      {
        id: "1t",
        img: "../../../assets/anillooro.png",
        alt: "Anillo",
        titulo: "400 USD",
        descripcion: "Anillo Corazón Grabable Dorado",
        anioPublicacion: 2026
      },
      {
        id: "2t",
        img: "../../../assets/anilloperla.png",
        alt: "Anillo",
        titulo: "540 USD",
        descripcion: "Anillo Perla Cultivada de Agua Dulce Tratada",
        anioPublicacion: 2026
      },
      {
        id: "3t",
        img: "../../../assets/anilllooroancho.png",
        alt: "Anillo",
        titulo: "460 USD",
        descripcion: "Anillo Banda Ancha Ondulada Dorado",
        anioPublicacion: 2026
      },
      {
        id: "4t",
        img: "../../../assets/anilloplata.png",
        alt: "Anillo",
        titulo: "306 USD",
        descripcion: "Anillo Corazón Grabable Plateado",
        anioPublicacion: 2026
      },
      {
        id: "5t",
        img: "../../../assets/anillohalo.png",
        alt: "Anillo",
        titulo: "510 USD",
        descripcion: "Anillo Halo Ovalado Brillante Dorado",
        anioPublicacion: 0
      },
      {
        id: "6t",
        img: "../../../assets/anillocanal.png",
        alt: "Anillo",
        titulo: "510 USD",
        descripcion: "Anillo Canal Eternity",
        anioPublicacion: 0
      },
      {
        id: "7t",
        img: "../../../assets/anillorosa.png",
        alt: "Anillo",
        titulo: "430 USD",
        descripcion: "Anillo Corazón Rosa Elevado",
        anioPublicacion: 0
      },
      {
        id: "8t",
        img: "../../../assets/anillodisney.png",
        alt: "Anillo",
        titulo: "512 USD",
        descripcion: "Anillo Carroza de La Cenicienta de Disney",
        anioPublicacion: 0
      }
    ];
  }

  // Propiedad que guarda la tarjeta seleccionada para mostrar en el modal
  tarjetaSeleccionada: any = null;

  // Método que se ejecuta al hacer clic en "Ver más"
  // Recibe una tarjeta como parámetro y la guarda en la propiedad tarjetaSeleccionada
  verMas(tarjeta: any) {
    this.tarjetaSeleccionada = tarjeta;
  }
}

