import { Component } from '@angular/core';
import ImageDetails from '../models/ImageDetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor() {}

  gallery: ImageDetails[] = [{
    source: "/sydfjords-angular/images/borealis-480w.webp",
    caption: "The aurora australis over the fjords. Nulla pharetra diam sit amet nisl suscipit adipiscing. Augue lacus viverra vitae congue eu consequat ac felis.",
    altText: "An aurora australis.",
    srcset: "/sydfjords-angular/images/borealis-480w.webp 480w, /sydfjords-angular/images/borealis-800w.webp 800w, /sydfjords-angular/images/borealis-1080w.webp 1080w",
    sizes: "(max-width: 600px) 480px, (max-width: 1000px) 800px, 1080px"
  },{
    source: "/sydfjords-angular/images/town2-480w.webp",
    altText: "A collection of buildings near the water's edge, in front of a mountain",
    caption: "Coldvatn, the heart of the Sydfjords. Sed adipiscing diam donec adipiscing tristique risus nec. Risus feugiat in ante metus dictum at.",
    srcset: "/sydfjords-angular/images/town2-480w.webp 480w, /sydfjords-angular/images/town2-800w.webp 800w, /sydfjords-angular/images/town2-1080w.webp 1080w",
    sizes: "(max-width: 600px) 480px, (max-width: 1000px) 800px, 1080px"
  },{
    source: "/sydfjords-angular/images/town-480w.webp",
    altText: "A town near the water's edge, with snow-capped mountains in the background",
    caption: "Coldwatvn, the heart of the Sydfjords. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at",
    srcset: "/sydfjords-angular/images/town-480w.webp 480w, /sydfjords-angular/images/town-800w.webp 800w, /sydfjords-angular/images/town-1080w.webp 1080w",
    sizes: "(max-width: 600px) 480px, (max-width: 1000px) 800px, 1080px"
  },{
    source: "/sydfjords-angular/images/horses-480w.webp",
    altText: "A pair of horses",
    caption: "Tortor at auctor urna nunc id cursus metus. A pellentesque sit amet porttitor eget dolor. Tempor orci eu lobortis elementum nibh tellus.",
    srcset: "/sydfjords-angular/images/horses-480w.webp 480w, /sydfjords-angular/images/horses-800w.webp 800w, /sydfjords-angular/images/horses-1080w.webp 1080w",
    sizes: "(max-width: 600px) 480px, (max-width: 1000px) 800px, 1080px"
  }, ];
}
