import { Component } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../../navbar/navbar/navbar.component';
import {NgxPaginationModule} from 'ngx-pagination'; 

@Component({
  selector: 'app-capitulos',
  standalone: true,
  imports: [CommonModule, MatIconModule,MatListModule,HttpClientModule,NavbarComponent,NgxPaginationModule],
  providers: [RickAndMortyService],
  templateUrl: './capitulos.component.html',
  styleUrl: './capitulos.component.scss'
})
export class CapitulosComponent {
  p: number = 1;
  capitulos: any;
  constructor(private rymService: RickAndMortyService) {}
  ngOnInit(): void {
    this.rymService.obtenerCapitulos().subscribe(resultado=> {
      this.capitulos = resultado;

    });
  }


}
