import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LocationComponent } from './location/location.component';
import { HomeComponent } from './home/home.component';
import { ColwdvatnComponent } from './colwdvatn/colwdvatn.component';
import { LoremvikComponent } from './loremvik/loremvik.component';
import { IpsumvatnComponent } from './ipsumvatn/ipsumvatn.component';
import { WhalesComponent } from './whales/whales.component';
import { HotelsComponent } from './hotels/hotels.component';
import { TravelComponent } from './travel/travel.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    LocationComponent,
    HomeComponent,
    ColwdvatnComponent,
    LoremvikComponent,
    IpsumvatnComponent,
    WhalesComponent,
    HotelsComponent,
    TravelComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
