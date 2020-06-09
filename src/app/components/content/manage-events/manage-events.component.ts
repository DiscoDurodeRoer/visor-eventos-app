import { Router } from '@angular/router';
import { EventService } from './../../../services/event.service';
import { Component, OnInit } from '@angular/core';
import { DdrBlockItem, DdrAction } from 'ddr-block-list';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrls: ['./manage-events.component.css']
})
export class ManageEventsComponent implements OnInit {

  public blockItems: DdrBlockItem[];

  public EDIT_EVENT: string = "EDIT_EVENT"
  public DELETE_EVENT: string = "DELETE_EVENT"

  constructor(
    private eventService: EventService,
    private router: Router) {
    this.blockItems = [];
  }

  ngOnInit() {

    let actions: DdrAction[] = [
      {
        'label': "Editar evento",
        'value': this.EDIT_EVENT
      },
      {
        'label': "Borrar evento",
        "value": this.DELETE_EVENT
      }
    ];

    this.eventService.getEvents().subscribe(events => {

      events = events.sort((e1, e2) => new Date(e2.start).getTime() - new Date(e1.start).getTime());

      events.forEach(event => {

        let blockItem = new DdrBlockItem();
        blockItem.item = event;
        switch (event.className) {
          case 'blog':
            blockItem.borderColor = '#7c7c7c';
            break;
          case 'video':
            blockItem.borderColor = '#c4302b';
            break;
          case 'streaming':
            blockItem.borderColor = '#6441a5';
            break;
          case 'udemy':
            blockItem.borderColor = '#ea5252';
            break;
        }
        blockItem.actions = actions;

        this.blockItems.push(blockItem);

      })
    });

  }

  getAction($event: DdrAction) {

    switch ($event.value) {
      case this.EDIT_EVENT:
        this.eventService.eventToEdit = $event.item;
        this.router.navigate(['/edit-event']);
        break;
      case this.DELETE_EVENT:
        this.eventService.deleteEvent($event.item.id);
        let index = this.blockItems.findIndex(block => block.item.id === $event.item.id);
        this.blockItems.splice(index, 1);
        break;
    }
  }

  selectItem($event) {
    this.eventService.eventToEdit = $event;
    this.router.navigate(['/edit-event']);
  }

}
