import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';

const routes: Routes = [
    {path: '', component: HomeComponent}, 
    {path: 'menu', component: MenuComponent},
    {path: 'menu/:id', component: ProductDetailsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }