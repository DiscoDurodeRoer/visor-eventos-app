// Angular
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { ReactiveFormsModule } from '@angular/forms';

// Module
import { AppRoutingModule } from './app-routing.module';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';

// Components
import { AppComponent } from './app.component';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { EventsComponent } from './components/content/events/events.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { AddEventComponent } from './components/content/add-event/add-event.component';
import { LoginComponent } from './components/login/login.component';


const firebaseConfig = {
  apiKey: "AIzaSyB7mmNnMZruESyjMe-HtCb5Sq0Bwz5bJR8",
  authDomain: "eventos-app-afc6a.firebaseapp.com",
  databaseURL: "https://eventos-app-afc6a.firebaseio.com",
  projectId: "eventos-app-afc6a",
  storageBucket: "",
  messagingSenderId: "194673032235",
  appId: "1:194673032235:web:ceb464a2d5a4272f193e6e"
};



@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    ContentComponent,
    HeaderComponent,
    AddEventComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    FormsModule,
    CalendarModule,
    CheckboxModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
