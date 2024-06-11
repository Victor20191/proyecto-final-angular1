import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatIconModule,MatListModule],
  providers: [RickAndMortyService],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.scss',
})
export class PersonajesComponent implements OnInit {
  personajes: any;
  constructor(private rymService: RickAndMortyService) {}
  ngOnInit(): void {
    this.rymService.obtenerPersonajes().subscribe(resultado=> {
      this.personajes = resultado;
      console.log(this.personajes);
    });
  }
}
