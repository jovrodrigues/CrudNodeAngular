import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoSubgrupoComponent } from './produto-subgrupo.component';

describe('ProdutoSubgrupoComponent', () => {
  let component: ProdutoSubgrupoComponent;
  let fixture: ComponentFixture<ProdutoSubgrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoSubgrupoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoSubgrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
