import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockPageComponent } from './stocks/stock-page/stock-page.component';

const routes: Routes = [
  {path: '', component: StockPageComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
