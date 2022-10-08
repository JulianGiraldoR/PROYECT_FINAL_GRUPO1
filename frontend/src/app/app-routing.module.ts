import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import{ProductsComponent} from './components/products/products.component'
import{PrivateProductsComponent} from './components/private-products/private-products.component'
import{LoginComponent} from './components/login/login.component'
import{RegisterComponent} from './components/register/register.component'
import { AdminComponent } from './components/admin/admin.component';
import { MainSectionComponent } from './components/main-section/main-section.component';

import {AuthGuard} from './auth.guard'
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch:'full'
  },
  {
    path:'products',
    component:MainSectionComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'private',
    component:PrivateProductsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'form',
    component:FormComponent,
   
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
  path:'admin',
  component:AdminComponent,
  canActivate:[AuthGuard]
},
{
  path:'footer',
  component:FooterComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
