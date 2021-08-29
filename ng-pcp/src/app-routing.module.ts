import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcpCalcComponent } from './app/pcp-calc/pcp-calc.component';

const routes: Routes = [
  { path: '', component: PcpCalcComponent },
  { path: 'result', component: PcpCalcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }