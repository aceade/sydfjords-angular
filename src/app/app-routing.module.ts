import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ColwdvatnComponent } from './colwdvatn/colwdvatn.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "cowldvatn",
    component: ColwdvatnComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
