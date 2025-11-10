export interface Lanzamiento {
  nombre: string;
  descripcion: string;
  imagen: string;
  precio?: number;        // opcional (podés agregar más si querés)
  fecha?: string;         // opcional, por si después querés ordenarlos por fecha
}

