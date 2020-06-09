import { DdrConfigurationService } from 'ddr-configuration';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Event } from '../../../models/event.model';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'ddr-add-edit-event',
  templateUrl: './add-edit-event.component.html',
  styleUrls: ['./add-edit-event.component.css']
})
export class AddEditEventComponent implements OnInit, OnDestroy {

  public event: Event;
  public showEnd: boolean;
  public today: Date;
  public localeES: any;

  public mode: number;

  public MODE_ADD = 1;
  public MODE_EDIT = 2;

  constructor(
   public eventService: EventService,
   private ddrConfiguration: DdrConfigurationService
  ) {

    if (this.eventService.eventToEdit) {
      this.event = this.eventService.eventToEdit;
      this.today = new Date();
      this.event.startDate = new Date(this.event.start);
      this.showEnd = this.event.end != null;
      if (this.showEnd) {
        this.event.endDate = new Date(this.event.end);
      }
      this.mode = this.MODE_EDIT;
    } else {
      this.event = new Event({});
      this.event.startDate = new Date();
      this.event.endDate = new Date();
      this.event.className = "blog";
      this.showEnd = false;
      this.mode = this.MODE_ADD;
    }

    this.today = new Date();

    this.localeES = this.ddrConfiguration.getData("locale");
  }

  ngOnInit() {
  }

  addEditEvent() {

    if (!this.showEnd) {
      this.event.endDate = null;
    }

    if (this.eventService.eventToEdit) {
      this.editEvent();
    } else {
      this.addEvent();
    }


  }

  editEvent() {


    this.eventService.editEvent().then(success => {
      if (success) {
        console.log("Se ha editado el evento");
      }
    }, error => {
      console.log(error);

    });

  }

  addEvent() {

    this.eventService.addEvent(this.event).then(success => {
      if (success) {
        console.log("Se ha creado el evento");
      }
    }, error => {
      console.log(error);

    });

  }

  ngOnDestroy() {
    this.eventService.eventToEdit = null;
  }

}
