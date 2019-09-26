import { Component, OnInit } from '@angular/core';
import { Event } from '../../../models/event.model';
import { DATE_PROPS } from '@fullcalendar/core/structs/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'ddr-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  public event: Event;
  public showEnd: boolean;
  public today: Date;
  public localeES: any;

  constructor(public eventService: EventService) {
    this.event = new Event({});

    this.today = new Date();
    this.event.startDate = new Date();
    this.event.endDate = new Date();
    this.event.className = "blog";

    this.showEnd = false;

    this.localeES = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
    }
  }

  ngOnInit() {
  }

  addEvent() {

    if (!this.showEnd) {
      this.event.endDate = null;
    }

    console.log(this.event);

    this.eventService.addEvent(this.event).then(success => {
      if (success) {
        console.log("Se ha creado el evento");

      }
    }, error => {
      console.log(error);

    });

  }

}
