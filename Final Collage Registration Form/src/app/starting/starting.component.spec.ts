import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingComponent } from './starting.component';

describe('StartingComponent', () => {
  let component: StartingComponent;
  let fixture: ComponentFixture<StartingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StartingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
