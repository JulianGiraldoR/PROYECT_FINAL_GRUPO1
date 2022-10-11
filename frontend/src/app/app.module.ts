import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { PrivateProductsComponent } from './components/private-products/private-products.component';
import { AuthGuard } from './auth.guard';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './components/admin/admin.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminFormsComponent } from './components/admin-form/admin-form.component';
import { FormSectionComponent } from './components/form-section/form-section.component';
import { AdminSectionComponent } from './components/admin-section/admin-section.component';






@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProductsComponent,
    PrivateProductsComponent,
    FormComponent,
    HeaderComponent,
    AdminComponent,
    MainSectionComponent,
    HomeComponent,
    FooterComponent,
    AdminFormsComponent,
    FormSectionComponent,
    AdminSectionComponent,
 
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
