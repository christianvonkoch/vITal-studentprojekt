import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupWindowComponent } from './popup-window.component';
import { MatDialogModule, MatDialogRef } from '@angular/material';

describe('PopupWindowComponent', () => {
  let component: PopupWindowComponent;
  let fixture: ComponentFixture<PopupWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupWindowComponent ],
      imports: [ MatDialogModule ],
      providers: [{provide : MatDialogRef, useValue : {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
