import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMetmaskComponent } from './ng-metmask.component';

describe('NgMetmaskComponent', () => {
  let component: NgMetmaskComponent;
  let fixture: ComponentFixture<NgMetmaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMetmaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMetmaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
