import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultarCostosComponent } from './consultar-costos/consultar-costos.component';
import { CompraEquipoComponent } from './compra-equipo/compra-equipo.component';
import { CostoSmartphoneComponent } from './costo-smartphone/costo-smartphone.component';
import { CostoPlanComponent } from './costo-plan/costo-plan.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultarCostosComponent,
    CompraEquipoComponent,
    CostoSmartphoneComponent,
    CostoPlanComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
