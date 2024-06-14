import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgrupoEditarComponent } from './subgrupo-editar.component';

describe('SubgrupoEditarComponent', () => {
  let component: SubgrupoEditarComponent;
  let fixture: ComponentFixture<SubgrupoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubgrupoEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubgrupoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
