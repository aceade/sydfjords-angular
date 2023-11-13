import { Component, Input } from '@angular/core';
import ImageDetails from '../models/ImageDetails';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  constructor() {}

  @Input() images: ImageDetails[] = [];
}
