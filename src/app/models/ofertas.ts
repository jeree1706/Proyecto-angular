export interface ImagenOferta {
  url: string;
  texto?: string;
}

export interface Ofertas {
  nombre: string;
  imagenes: ImagenOferta[];
}

/*
export interface Ofertas {
     nombre: string;        // Nombre de la oferta o categoría
     imagenes: string[];    // Rutas de las imágenes asociadas
}*/
