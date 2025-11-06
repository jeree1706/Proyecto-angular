import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { NewProduct } from './pages/products/new-product/new-product';
import { Lanzamiento } from './pages/lanzamiento/lanzamiento';
import { Oferta } from './pages/oferta/oferta';
import { PregFrecuente } from './pages/preg-frecuente/preg-frecuente';
import { TerminosCondiciones } from './pages/terminos-condiciones/terminos-condiciones';

/**
 * Creo las rutas de mi pagina
 */
export const routes: Routes = [
    {path: "", component: Home},
    {path: `home`, component: Home},
    {path: `about`, component: About},
    {path: `contact`, component: Contact},
    {path: `products`, component: Products},
    {path: `lanzamiento`, component: Lanzamiento},
    {path: `oferta`, component: Oferta},
    {path: `preg-frecuente`, component: PregFrecuente},
    {path: `terminosCondiciones`, component: TerminosCondiciones},
    {path: `new-preoducts`, component: NewProduct},
];

