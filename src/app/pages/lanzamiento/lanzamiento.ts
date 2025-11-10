import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lanzamiento } from '../../models/lanzamientos'; // ✅ importás la interfaz

@Component({
  selector: 'app-lanzamiento',
  imports: [CommonModule],
  templateUrl: './lanzamiento.html',
  styleUrls: ['./lanzamiento.css']
})
export class LanzamientoComponent {
  lanzamientos: Lanzamiento[] = [
    {
      nombre: 'Anillo Pantera Negra Marvel',
      descripcion: '250 USD',
      imagen: 'assets/blackpanter.png'
    },
    {
      nombre: 'Anillo luna creciente',
      descripcion: '110 USD',
      imagen: 'assets/lanzamiento2.png'
    },
    {
      nombre: 'Anillo alas abiertas Thor',
      descripcion: '280 USD',
      imagen: 'assets/lanzamiento4.png'
    }
  ];
}


