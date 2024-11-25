import { Component } from '@angular/core';
// import { OwlOptions } from 'ngx-owl-carousel-o';
// import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-slider-content',
  templateUrl: './slider-content.component.html',
  styleUrls: ['./slider-content.component.scss']
})
export class SliderContentComponent {
  slides = [
    {path: './../../assets/images/working-1056583_12801.jpg'}, 
    {path: './../../assets/images/industrial-1636393_12801.jpg'},
    {path: './../../assets/images/steelworkers-1029665_12801.jpg'},
  ];

  // customOptions: any = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }
}
