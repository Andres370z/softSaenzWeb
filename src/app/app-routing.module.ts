import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'pages/home',
        pathMatch: 'full',
    },
    {path: '', component: HomeComponent}, 
    {path: 'menu', component: MenuComponent},
    {path: 'menu/:id', component: ProductDetailsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    { path: 'pages/home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    { 
        path: 'pages/products', 
        loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),
        canActivate: [AuthGuard]
    },
    { 
        path: 'pages/services', 
        loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule),
        canActivate: [AuthGuard]
    },
    { 
        path: 'pages/contacts', 
        loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule),
        canActivate: [AuthGuard] 
    },
    { 
        path: 'pages/reservationDocument', 
        loadChildren: () => import('./pages/reservation-document/reservation-document.module').then(m => m.ReservationDocumentModule),
        canActivate: [AuthGuard] 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }