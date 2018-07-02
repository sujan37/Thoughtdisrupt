import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';



import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const customRoutes:Routes = [
  { path:'home', component:HomeComponent},
  { path:'services', component:ServicesComponent},
  { path:'products', component:ProductsComponent},
  { path:'contact', component:ContactComponent},
  { path:'home', component:HomeComponent},
  {path :'**',component:ErrorPageComponent}  
];

@NgModule({
  imports: [
    RouterModule.forRoot(customRoutes)
  ],
  exports: [RouterModule]
})



export class RoutingModule {
  constructor() {

  }
}