import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoradoresVisitantesComponent } from './moradores-visitantes.component';

describe('MoradoresVisitantesComponent', () => {
  let component: MoradoresVisitantesComponent;
  let fixture: ComponentFixture<MoradoresVisitantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoradoresVisitantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoradoresVisitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
