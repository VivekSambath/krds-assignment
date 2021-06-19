import { Component, OnInit, Injector } from '@angular/core';
import { DataService } from '../service/service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  logo?: any;
  features?: any;
  errorMsg: any;
  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (data) => {
        this.logo = data.logo;
        this.features = data.features;
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }
}
