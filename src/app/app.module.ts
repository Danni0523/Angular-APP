import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultarCostosComponent } from './consultar-costos/consultar-costos.component';
import { CompraEquipoComponent } from './compra-equipo/compra-equipo.component';
import { CostoSmartphoneComponent } from './costo-smartphone/costo-smartphone.component';
import { CostoPlanComponent } from './costo-plan/costo-plan.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultarCostosComponent,
    CompraEquipoComponent,
    CostoSmartphoneComponent,
    CostoPlanComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
