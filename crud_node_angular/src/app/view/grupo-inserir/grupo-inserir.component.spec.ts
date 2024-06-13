import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoInserirComponent } from './grupo-inserir.component';

describe('GrupoInserirComponent', () => {
  let component: GrupoInserirComponent;
  let fixture: ComponentFixture<GrupoInserirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoInserirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
