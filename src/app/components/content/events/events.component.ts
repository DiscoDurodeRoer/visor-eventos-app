import { EventService } from './../../../services/event.service';
import { Component, OnInit, Input, ViewChild, ViewEncapsulation } from '@angular/core';

import { FullCalendar } from 'primeng/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

import esLocale from '@fullcalendar/core/locales/es';
import { Event } from '../../../models/event.model';
import Tooltip from 'tooltip.js'
import * as $ from 'jquery';
import * as moment from 'moment';

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

  @ViewChild('calendar', { static: true }) private calendar: FullCalendar;

  constructor(
    private eventService: EventService
  ) {

    this.fechaEventosList = new Date();

    this.eventService.getFutureEventsMonth().subscribe(events => {
      this.events = events;
    });

    this.optionsMonth = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: new Date(),
      locale: esLocale,
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridWeek'
      },
      eventRender: (e) => {
        // console.log(e);
        var tooltip = new Tooltip(e.el, {
          title: "<h6>" + e.event.title + "</h6>" + e.event.extendedProps.description,
          placement: 'top',
          trigger: 'hover',
          container: 'body',
          html: true
        });

      },
      viewRender: (view) => {
        console.log(view);
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
