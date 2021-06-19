import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'krds-assignment';
  innerWidth: any;
  desktopView: boolean = false;
  mobileView: boolean = false;

  IsHidden: boolean = false;
  ngOnInit(): void {
    this.switchLayout();
  }

  switchLayout = () => {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 600) {
      this.desktopView = true;
      this.mobileView = false;
    } else {
      this.desktopView = false;
      this.mobileView = true;
    }
  };

  @HostListener('window:resize', ['$event'])
  sizeChange() {
    this.switchLayout();
  }
}
