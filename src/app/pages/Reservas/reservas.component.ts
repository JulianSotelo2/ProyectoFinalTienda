import { Component, OnInit } from '@angular/core';
import { ReservaModel } from 'src/app/models/reserva.model';
import { ReservaService } from 'src/app/services/reserva.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit{

  reservas: ReservaModel[] = [];
  cargando = false;


  

  constructor( private reservaService: ReservaService ) { }

  ngOnInit() {

    this.cargando = true;
    this.reservaService.getReservas()
      .subscribe( (resp:any) => {
        this.reservas = resp;
        this.cargando = false;
      });

  }

  borrarReserva( reserva: ReservaModel, i: number ) {

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if ( resp.value ) {
        this.reservas.splice(i, 1);
        this.reservaService.borrarReserva( reserva.id ).subscribe();
      }

    });



  }


}
