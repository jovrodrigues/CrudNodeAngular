import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeInserirComponent } from './unidade-inserir.component';

describe('UnidadeInserirComponent', () => {
  let component: UnidadeInserirComponent;
  let fixture: ComponentFixture<UnidadeInserirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadeInserirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadeInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
