import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/service';
import { trigger, transition, animate, style } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition('* => void', [
        style({ opacity: 1 }),
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class MobileComponent implements OnInit {
  // ngOnInit() {
  //   setInterval(() => {
  //     this.current = ++this.current % this.img_list.length;
  //   }, 2000);
  // }
  constructor(public dataService: DataService) {}

  logo?: any;
  features?: any;
  errorMsg: any;
  title?: any;

  current = 0;

  items = [
    {
      title: 'Astonishing features requires worry-free security',
      desc: '1 Year Free Mobile Security',
      logo: 'https://krds-assignment.github.io/aoc/api-assets/logo-f-secure.png',
      image: 'https://krds-assignment.github.io/aoc/api-assets/image-1.png',
      bg: ' #41ca6e',
    },
    {
      title: 'Be hooked!',
      desc: '2000+ Movies from Bollywood',
      logo: 'https://krds-assignment.github.io/aoc/api-assets/logo-digitainment.png',
      image: 'https://krds-assignment.github.io/aoc/api-assets/image-2.png',
      bg: '#fab153',
    },
    {
      title: 'The best things in life are free',
      desc: 'Free Mobile Pouch',
      logo: 'https://krds-assignment.github.io/aoc/api-assets/logo-adaptxt.png',
      image: 'https://krds-assignment.github.io/aoc/api-assets/image-3.png',
      bg: '#7277d5',
    },
    {
      title: 'The thump never ends here',
      desc: '1000’s of songs',
      logo: 'https://krds-assignment.github.io/aoc/api-assets/logo-hungama.png',
      image: 'https://krds-assignment.github.io/aoc/api-assets/image-4.png',
      bg: '#f87d51',
    },
    {
      title: 'Being globally you',
      desc: '21 Indian & Foreign Languages',
      logo: 'https://krds-assignment.github.io/aoc/api-assets/logo-adaptxt.png',
      image: 'https://krds-assignment.github.io/aoc/api-assets/image-5.png',
      bg: '#ed5466',
    },
    {
      title: 'For the wise',
      desc: '1000 pts Discount on Subscription',
      logo: 'https://krds-assignment.github.io/aoc/api-assets/logo-read-where.png',
      image: 'https://krds-assignment.github.io/aoc/api-assets/image-6.png',
      bg: '#4ec2e7',
    },
  ];

  ngOnInit(): void {
    this.title = '';
    this.logo = 'https://krds-assignment.github.io/aoc/api-assets/logo-aoc.png';
    // setInterval(() => {
    //   this.current = ++this.current % this.img_list.length;
    // }, 2000);
    // this.dataService.getData().subscribe(
    //   (data) => {
    //     this.logo = data.logo;
    //     this.features = data.features;
    //     // this.img_list = data;
    //   },
    //   (error) => {
    //     console.error('There was an error!', error);
    //   }
    // ),
  }

  prevImage = () => {
    if (this.current == 0) {
      this.current = this.items.length - 1;
    } else {
      this.current = this.current - 1;
    }
  };

  nextImage = () => {
    if (this.current !== this.items.length - 1) {
      this.current = this.current + 1;
    } else {
      this.current = 0;
    }
  };
}
