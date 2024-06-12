import { Component } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../../navbar/navbar/navbar.component';
import {NgxPaginationModule} from 'ngx-pagination'; 



@Component({
  selector: 'app-locaciones',
  standalone: true,
  imports: [CommonModule, MatIconModule,MatListModule,HttpClientModule,NavbarComponent,NgxPaginationModule],
  providers: [RickAndMortyService],
  templateUrl: './locaciones.component.html',
  styleUrl: './locaciones.component.scss'
})
export class LocacionesComponent {
  p: number = 1;
  locaciones: any;
  constructor(private rymService: RickAndMortyService) {}
  ngOnInit(): void {
    this.rymService.obtenerCapitulos().subscribe(resultado=> {
      this.locaciones = resultado;
      // console.log(this.capitulos);
    });
  }

}
