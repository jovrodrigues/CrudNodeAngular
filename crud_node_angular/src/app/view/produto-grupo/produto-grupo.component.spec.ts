import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoGrupoComponent } from './produto-grupo.component';

describe('ProdutoGrupoComponent', () => {
  let component: ProdutoGrupoComponent;
  let fixture: ComponentFixture<ProdutoGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoGrupoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
