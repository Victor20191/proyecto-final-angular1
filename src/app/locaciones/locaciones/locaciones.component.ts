import { Component } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../../navbar/navbar/navbar.component';



@Component({
  selector: 'app-locaciones',
  standalone: true,
  imports: [CommonModule, MatIconModule,MatListModule,HttpClientModule,NavbarComponent],
  providers: [RickAndMortyService],
  templateUrl: './locaciones.component.html',
  styleUrl: './locaciones.component.scss'
})
export class LocacionesComponent {
  locaciones: any;
  constructor(private rymService: RickAndMortyService) {}
  ngOnInit(): void {
    this.rymService.obtenerCapitulos().subscribe(resultado=> {
      this.locaciones = resultado;
      // console.log(this.capitulos);
    });
  }

}
