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
    img: "../../../assets/pant.nike.webp",
    alt: "Pantalon",
    titulo: "Pantalon urbano Nike",
    descripcion: "Talles disponibles : 38-43.   Colores blanco y negro",
    anioPublicacion: 0
  },
   {
    id: "2t",
    img: "../../../assets/adidaspant.webp",
    alt: "Pantalon rompevientos",
    titulo: "Pantalon rompevientos Adidas",
    descripcion: "Talles disponibles: 36-42",
    anioPublicacion: 0
  },
   {
    id: "3t",
    img: "../../../assets/zapalacoste.webp",
    alt: "Lacoste",
    titulo: "Zapatillas de vestir blancas Lacoste",
    descripcion: "Talles disponibles: 39-44",
    anioPublicacion: 0
  },
   {
    id: "4t",
    img: "../../../assets/remgucci.webp",
    alt: "Remera Gucci",
    titulo: "Remera de vestir Gucci",
    descripcion: "Talles disponibles: S-M-L",
    anioPublicacion: 0
  },
  /*{
    id: "5t",
    img: "../../../assets/Lacoste-Simbolo.jpg",
    alt: "Foto del logo de lacoste",
    titulo: "Lacoste",
    descripcion: "Logo de Lacoste",
    anioPublicacion: 0
  }*/
  ]
}
tarjetaSeleccionada: any = null;

verMas (tarjeta: any){
  this.tarjetaSeleccionada = tarjeta
}
}
