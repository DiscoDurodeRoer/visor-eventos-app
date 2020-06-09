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
          title: "<h6>"+e.event.title +"</h6>"+e.event.extendedProps.description,
          placement: 'top',
          trigger: 'hover',
          container: 'body',
          html: true
        });

      },
      editable: false
    };

    this.optionsList = {
      plugins: [dayGridPlugin, listPlugin, interactionPlugin],
      defaultDate: new Date(),
      duration: { days: 10 },
      defaultView: 'list',
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
