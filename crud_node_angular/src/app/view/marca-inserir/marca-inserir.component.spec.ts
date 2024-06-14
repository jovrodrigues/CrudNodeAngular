import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaInserirComponent } from './marca-inserir.component';

describe('MarcaInserirComponent', () => {
  let component: MarcaInserirComponent;
  let fixture: ComponentFixture<MarcaInserirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaInserirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
