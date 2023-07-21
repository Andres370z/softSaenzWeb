import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';

const routes: Routes = [
    { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
    { path: 'menu', loadChildren: () => import('./components/pages/menu/menu.module').then(m => m.MenuModule) },
    { path: 'menu/:id', loadChildren: () => import('./components/pages/product-details/product-details.module').then(m => m.ProductDetailsModule) },

    { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
    { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }