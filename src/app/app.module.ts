import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LocationComponent } from './location/location.component';
import { HomeComponent } from './home/home.component';
import { ColwdvatnComponent } from './colwdvatn/colwdvatn.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    LocationComponent,
    HomeComponent,
    ColwdvatnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
