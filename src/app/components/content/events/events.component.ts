import { Component, OnInit, Input } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

import esLocale from '@fullcalendar/core/locales/es';
@Component({
  selector: 'ddr-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public events: any;;

  public optionsMonth: any;
  public optionsList: any;

  constructor() {
    this.events = [
      {
        "title": "All Day Event",
        "start": "2019-09-17"
      },
      {
        "title": "Long Event",
        "start": "2019-09-01",
        "end": "2019-09-10"
      },
      {
        "title": "Repeating Event",
        "start": "2019-09-09T16:00:00"
      },
      {
        "title": "Repeating Event",
        "start": "2019-09-17T16:00:00"
      },
      {
        "title": "Conference",
        "start": "2016-01-11",
        "end": "2016-01-13"
      }
    ];


    this.optionsMonth = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: new Date(),
      locale: esLocale,
      header: {
        left: 'prev,next',
        center: 'title',
        right: ''
      },
      editable: false
    };

    this.optionsList = {
      plugins: [dayGridPlugin, listPlugin, interactionPlugin],
      defaultDate: new Date(),
      defaultView: 'listWeek',
      locale: esLocale,
      header: {
        left: 'prev,next',
        center: 'title',
        right: ''
      },
      editable: false
    };

  }

  ngOnInit() {
  }

}
