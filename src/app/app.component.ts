import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  galleryImagesSlider = [];

  constructor() {
    for (let i = 0; i < 8; i++) {
      const url = "https://loremflickr.com/640/480?random=" + (i + 1);
      this.galleryImagesSlider[i] = {
        id: i + 1,
        small: url,
        medium: url,
        big: url,
        show: false
      };
    }
  }
}
