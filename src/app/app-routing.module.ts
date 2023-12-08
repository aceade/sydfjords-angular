import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ColwdvatnComponent } from './colwdvatn/colwdvatn.component';
import { HotelsComponent } from './hotels/hotels.component';
import { TravelComponent } from './travel/travel.component';
import { LoremvikComponent } from './loremvik/loremvik.component';
import { IpsumvatnComponent } from './ipsumvatn/ipsumvatn.component';
import { AboutComponent } from './about/about.component';
import { WhalesComponent } from './whales/whales.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "cowldvatn",
    component: ColwdvatnComponent
  },{
    path: "loremvik",
    component: LoremvikComponent
  }, {
    path: "ipsumvatn",
    component: IpsumvatnComponent
  }, {
    path: "whales",
    component: WhalesComponent
  }, {
    path: "hotels",
    component: HotelsComponent
  }, {
    path: "travel",
    component: TravelComponent
  }, {
    path: "about",
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
