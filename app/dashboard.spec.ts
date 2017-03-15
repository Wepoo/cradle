import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent (inline template)', () => {

  let comp:    DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(DashboardComponent);

    comp = fixture.componentInstance; // test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });
});
