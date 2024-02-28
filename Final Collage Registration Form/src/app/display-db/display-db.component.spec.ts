import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDBComponent } from './display-db.component';

describe('DisplayDBComponent', () => {
  let component: DisplayDBComponent;
  let fixture: ComponentFixture<DisplayDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayDBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
