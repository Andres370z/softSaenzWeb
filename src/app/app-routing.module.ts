import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
    { path: 'menu', loadChildren: () => import('./components/pages/menu/menu.module').then(m => m.MenuModule) },
    { path: 'menu/:id', loadChildren: () => import('./components/pages/product-details/product-details.module').then(m => m.ProductDetailsModule) },

    { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
    { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule) },
    { path: 'services', loadChildren: () => import('./components/pages/my-services/my-services.module').then(m => m.MyServicesModule) },
    { path: 'services/:id', loadChildren: () => import('./components/pages/my-services-details/my-services-details.module').then(m => m.MyServicesDetailsModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }