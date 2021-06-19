import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileComponent } from './mobile.component';
import { trigger, transition, animate, style } from '@angular/animations';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MobileComponent', () => {
  let component: MobileComponent;
  let fixture: ComponentFixture<MobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
