import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgrupoInserirComponent } from './subgrupo-inserir.component';

describe('SubgrupoInserirComponent', () => {
  let component: SubgrupoInserirComponent;
  let fixture: ComponentFixture<SubgrupoInserirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubgrupoInserirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubgrupoInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
