
import { Component } from '@angular/core';
import { Ofertas } from '../../models/ofertas';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.html',
  styleUrls: ['./oferta.css']
})
export class OfertaComponent {
  // Array de ofertas con sus imágenes
  ofertas: Ofertas[] = [
    {
      nombre: 'Productos',
      imagenes: [
        '../../../assets/producto1.webp',
        '../../../assets/producto2.webp',
        '../../../assets/producto3.webp'
      ]
    },
    {
      nombre: 'Servicios',
      imagenes: [
        '../../../assets/servicio1.webp',
        '../../../assets/servicio2.webp',
        '../../../assets/servicio3.webp'
      ]
    },
    {
      nombre: 'Promociones',
      imagenes: [
        '../../../assets/promo1.webp',
        '../../../assets/promo2.webp',
        '../../../assets/promo3.webp'
      ]
    }
  ];
}


















/*import { Component } from '@angular/core';

@Component({
  selector: 'app-oferta',
  imports: [],
  templateUrl: './oferta.html',
  styleUrl: './oferta.css'
})
export class Oferta {

}*/
