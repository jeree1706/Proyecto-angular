import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ofertas } from '../../models/ofertas';
/* Se importan los módulos y el modelo necesario:
   - Component: para definir el componente de Angular.
   - CommonModule: permite usar directivas comunes como *ngFor o *ngIf.
   - Ofertas: es la interfaz que define la estructura de los datos usados en este componente. */

@Component({
  selector: 'app-oferta',
  /* Define el nombre del componente que se usará en el HTML (por ejemplo <app-oferta>). */

  standalone: true,
  /* Indica que este componente es independiente y no depende de un módulo principal (Angular Standalone Component). */

  imports: [CommonModule],
  /* Importa CommonModule para habilitar directivas y funcionalidades básicas dentro del componente. */

  templateUrl: './oferta.html',
  /* Indica la ruta del archivo HTML asociado que define la estructura visual del componente. */

  styleUrls: ['./oferta.css']
  /* Indica la ruta del archivo CSS que contiene los estilos aplicados a este componente. */
})
export class OfertaComponent {
  /* Define la clase principal del componente, donde se declara la lógica y los datos usados en la vista. */

  ofertas: Ofertas[] = [
    /* Se declara una propiedad llamada "ofertas", que es un arreglo (array) del tipo "Ofertas".
       Contiene toda la información que se mostrará en la sección de ofertas de la página. */

    {
      nombre: 'Productos',
      /* Nombre de la categoría principal, usado como título en el HTML. */

      imagenes: [
        /* Arreglo que contiene las imágenes asociadas a esta categoría de ofertas. */

        { url: 'assets/ofertalogo.jpg', texto: 'Las mejores ofertas' },
        /* Cada objeto dentro del arreglo tiene una imagen (url) y un texto que se muestra sobre la imagen. */

        { url: 'assets/pulseradescuento.png', texto: '15% de Descuento' },
        { url: 'assets/charmdesc.png', texto: 'Oferta por tiempo limitado' }
      ]
    },

    {
      nombre: 'Servicios',
      /* Segunda categoría dentro del arreglo de ofertas. */

      imagenes: [
        { url: 'assets/mant.jpg', texto: "Soldadura de joyas" },
        { url: 'assets/service.jpg', texto: "Mantenimiento"},
        { url: 'assets/serviciojoya.jpg', texto: "Reparación"}
      ]
      /* Igual que la anterior, contiene imágenes con textos descriptivos que se mostrarán en el carrusel. */
    },
  ];
  /* Fin de la propiedad "ofertas". 
     Los datos definidos aquí se mostrarán en la vista a través del *ngFor del archivo HTML. */
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
