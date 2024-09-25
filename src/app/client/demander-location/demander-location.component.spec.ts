import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanderLocationComponent } from './demander-location.component';

describe('DemanderLocationComponent', () => {
  let component: DemanderLocationComponent;
  let fixture: ComponentFixture<DemanderLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemanderLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemanderLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
