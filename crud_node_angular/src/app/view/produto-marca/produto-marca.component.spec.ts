import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoMarcaComponent } from './produto-marca.component';

describe('ProdutoMarcaComponent', () => {
  let component: ProdutoMarcaComponent;
  let fixture: ComponentFixture<ProdutoMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoMarcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
