import { EventService } from './../../../services/event.service';
import { Component, OnInit, Input, ViewChild, ViewEncapsulation } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

import esLocale from '@fullcalendar/core/locales/es';
import { Event } from '../../../models/event.model';
import { FullCalendar } from 'primeng/components/fullcalendar/fullcalendar';
import Tooltip from 'tooltip.js'
import * as $ from 'jquery';

@Component({
  selector: 'ddr-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventsComponent implements OnInit {

  public events: Event[];

  public optionsMonth: any;
  public optionsList: any;
  public fechaEventosList: Date;

  constructor(
    private eventService: EventService
  ) {

    this.fechaEventosList = new Date();

    console.log(this.fechaEventosList.getDay());

    if(this.fechaEventosList.getDay() > 5){
      this.fechaEventosList.setTime(this.fechaEventosList.getTime() + 604800000);
    }



    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });

    this.optionsMonth = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: new Date(),
      locale: esLocale,
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth, dayGridWeek, dayGridDay'
      },
      eventRender: (e) =>  {
        var tooltip = new Tooltip(e.el, {
          title: e.event.extendedProps.description,
          placement: 'top',
          trigger: 'hover',
          container: 'body'
        });

      },
      editable: false
    };

    this.optionsList = {
      plugins: [dayGridPlugin, listPlugin, interactionPlugin],
      defaultDate: this.fechaEventosList,
      defaultView: 'listWeek',
      locale: esLocale,
      header: {
        left: '',
        center: 'title',
        right: ''
      },
      editable: false
    };

  }

  ngOnInit() {

  }

}
