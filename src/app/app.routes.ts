import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "", loadComponent: () => import('../components/home/home').then(m => m.Home) },
    { path: "home", loadComponent: () => import('../components/home/home').then(m => m.Home) },
    { path: "shop", loadComponent: () => import('../components/shop/shop').then(m => m.Shop) }
];