import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/pages/menu/menu.component';
import { ProductDetailsComponent } from './components/pages/product-details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from'@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon'
import { MatNativeDateModule } from '@angular/material/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { pagesReducers } from '../store/pagesReducers';
import { EffectsArray } from '../store/effects';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    ProductDetailsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    StoreModule.forRoot(pagesReducers),
    EffectsModule.forRoot(EffectsArray),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers : [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
