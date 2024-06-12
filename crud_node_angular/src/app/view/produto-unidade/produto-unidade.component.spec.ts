import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoUnidadeComponent } from './produto-unidade.component';

describe('ProdutoUnidadeComponent', () => {
  let component: ProdutoUnidadeComponent;
  let fixture: ComponentFixture<ProdutoUnidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoUnidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
