import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesComponent } from './personajes.component';
import { NavbarComponent } from '../../navbar/navbar/navbar.component';

describe('PersonajesComponent', () => {
  let component: PersonajesComponent;
  let fixture: ComponentFixture<PersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajesComponent,NavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
