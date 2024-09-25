import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesAppatementsComponent } from './mes-appatements.component';

describe('MesAppatementsComponent', () => {
  let component: MesAppatementsComponent;
  let fixture: ComponentFixture<MesAppatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesAppatementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesAppatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
