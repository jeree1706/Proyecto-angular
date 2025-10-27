import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  /*
  propiedad Publica: Libre acceso a su contenido
  propiedad Privada: contenido restringido */
public infoTarjeta: Tarjeta [];


constructor (){
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
    descripcion: "Anillo Perla Cultivada de Agua Dulce Tratada ",
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
  ]


}



tarjetaSeleccionada: any = null;

verMas (tarjeta: any){
  this.tarjetaSeleccionada = tarjeta
}
}
