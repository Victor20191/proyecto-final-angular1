import { Component } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-capitulos',
  standalone: true,
  imports: [CommonModule, MatIconModule,MatListModule,HttpClientModule],
  providers: [RickAndMortyService],
  templateUrl: './capitulos.component.html',
  styleUrl: './capitulos.component.scss'
})
export class CapitulosComponent {

  capitulos: any;
  constructor(private rymService: RickAndMortyService) {}
  ngOnInit(): void {
    this.rymService.obtenerCapitulos().subscribe(resultado=> {
      this.capitulos = resultado;
      // console.log(this.capitulos);
    });
  }


}
