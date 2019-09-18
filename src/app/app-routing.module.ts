import { AddEventComponent } from './components/content/add-event/add-event.component';
import { EventsComponent } from './components/content/events/events.component';
import { ContentComponent } from './components/content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'events', component: EventsComponent},
  { path: 'add-event', component: AddEventComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'events'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
