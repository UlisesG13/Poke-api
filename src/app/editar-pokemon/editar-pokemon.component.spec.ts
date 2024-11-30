import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPokemonComponent } from './editar-pokemon.component';

describe('EditarPokemonComponent', () => {
  let component: EditarPokemonComponent;
  let fixture: ComponentFixture<EditarPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
