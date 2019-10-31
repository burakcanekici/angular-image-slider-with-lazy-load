import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'be-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, AfterViewInit {

  @Input() data: any[];
  public modalImageSrc: string;

  fill = "fas fa-circle";
  empty = "far fa-circle";

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.modalImageSrc = this.data[0].medium;
  }

  ngAfterViewInit(){
    var icons = this.elementRef.nativeElement.querySelectorAll('.dvIcon');
    var count = Math.floor(icons.length / 2);
    for (var i = 0; i < icons.length; i++) {
      var middle = icons.length % 2 == 1 ? 50 : 48;
      if (i == Math.floor(icons.length / 2)){
        count = 1;
        icons[i].style.left = middle.toString() + "%";
        if(icons.length % 2 == 0){
          middle = 53;
        }
      }
      else if (i < Math.floor(icons.length / 2)){
        var dist = middle - (count * 5);
        icons[i].style.left = dist.toString() + "%";
        count--;
      }
      else if (i > Math.floor(icons.length / 2)){
        var dist = middle + (count * 5);
        icons[i].style.left = dist.toString() + "%";
        count++;
      }

      icons[i].style.bottom = "5%";
      icons[i].children[0].className = this.empty;
      icons[0].children[0].className = this.fill;
    }
  }

  change(index, event) {
    var icons = this.elementRef.nativeElement.querySelectorAll('.dvIcon');
    icons.forEach(element => {
      element.children[0].className = this.empty;
    });
    event.currentTarget.children[0].className = this.fill;
    this.modalImageSrc = this.data[index].medium;
  }
}
