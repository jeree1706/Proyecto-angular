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
    alt: "Foto de camisas",
    titulo: "Pantalon urbano Nike",
    descripcion: "Talles disp. : 38-43",
    anioPublicacion: 0
  },
   {
    id: "2t",
    img: "../../../assets/adidaspant.webp",
    alt: "Foto del logo de nike",
    titulo: "Nike",
    descripcion: "Logo de nike",
    anioPublicacion: 0
  },
   {
    id: "3t",
    img: "../../../assets/zapalacoste.webp",
    alt: "Foto del logo de adidas",
    titulo: "Adidas",
    descripcion: "Logo de adidas",
    anioPublicacion: 0
  },
   {
    id: "4t",
    img: "../../../assets/remgucci.webp",
    alt: "Foto del logo de gucci",
    titulo: "Gucci",
    descripcion: "Logo de gucci",
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
}
