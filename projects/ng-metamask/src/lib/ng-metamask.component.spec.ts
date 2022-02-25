import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmetamaskComponent } from './ng-metamask.component';

describe('NgmetamaskComponent', () => {
  let component: NgmetamaskComponent;
  let fixture: ComponentFixture<NgmetamaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgmetamaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmetamaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
