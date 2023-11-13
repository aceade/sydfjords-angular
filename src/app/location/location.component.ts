import { Component } from '@angular/core';
import ImageDetails from '../models/ImageDetails';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  constructor() {}
  title: string = "";
  images: ImageDetails[] = [];
  intro: string = "";
  endParagraph: string = "";
}
