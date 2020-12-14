import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/services/portafolio.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.sass']
})
export class PortafolioComponent implements OnInit {

  portafolios = []; // Variable de portafolios
  public cargando: boolean = true;

  constructor(private portafolioService: PortafolioService) { }

  ngOnInit(): void {
    this.getPortafolio();
  }


  getPortafolio () { // Cargar Valores
    this.portafolioService.getPortafolio().pipe(  )
    .subscribe( (response: any) => {
      this.portafolios = response.portafolios;
      this.cargando = false;
    });
  }


}
