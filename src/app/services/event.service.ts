import { Event } from './../models/event.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private afd: AngularFireDatabase
  ) { }

  addEvent(evento: Event): Promise<boolean> {

    // Devuelve una promesa
    return new Promise((resolve, reject) => {

      try {

        // Obtengo la referencia de los eventos
        let eventRef = this.afd.database.ref('eventos');

        // añado un nuevo evento
        let newEvent = eventRef.push();

        // Obtengo el id del nuevo evento
        evento.id = newEvent.key;

        // Formateo la fecha
        evento.start = moment(evento.startDate).format('YYYY-MM-DDTHH:mm');

        if (evento.endDate) {
          evento.end = moment(evento.endDate).format('YYYY-MM-DDTHH:mm');
        }

        // Obtengo la referencia del registro mas su id
        let eventRefID = this.afd.database.ref('eventos/' + evento.id);

        // Seteo el valor
        eventRefID.set(evento.getData());

        // Indico que todo se resolvio bien
        resolve(true);

      } catch (error) {
        // Hubo un error
        reject('Error al añadir el registro');
      }

    });


  }

  getEvents(): Observable<Event[]> {
    return this.afd.list<Event>('eventos').valueChanges();
  }

}
