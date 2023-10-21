import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarCostosComponent } from './consultar-costos/consultar-costos.component';
import { CompraEquipoComponent } from './compra-equipo/compra-equipo.component';
import { CostoSmartphoneComponent } from './costo-smartphone/costo-smartphone.component';
import { CostoPlanComponent } from './costo-plan/costo-plan.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'consultar-costos', component: ConsultarCostosComponent },
  { path: 'compra-equipo', component: CompraEquipoComponent },
  { path: 'costo-smartphone', component: CostoSmartphoneComponent },
  { path: 'costo-plan', component: CostoPlanComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
