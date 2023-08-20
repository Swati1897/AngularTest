import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MychartComponent } from './mychart/mychart.component';
import { AddDataComponent } from './add-data/add-data.component';

const routes: Routes = [
  { path:"chart" , component:MychartComponent },
  { path:"add-data",  component: AddDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
