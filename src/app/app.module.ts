
// Angular
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Module
import { AppRoutingModule } from './app-routing.module';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { NgxPaginationModule } from 'ngx-pagination';

// Services
import { CourseService } from './services/course.service';

// Pipes
import { SanitizePipe } from './pipes/sanitize.pipe';

// Components
import { AppComponent } from './app.component';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { EventsComponent } from './components/content/events/events.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { AddEventComponent } from './components/content/add-event/add-event.component';
import { LoginComponent } from './components/login/login.component';
import { CouponComponent } from './components/content/courses/coupon/coupon.component';
import { CoursesComponent } from './components/content/courses/courses.component';




const firebaseConfig = {
  apiKey: "AIzaSyB7mmNnMZruESyjMe-HtCb5Sq0Bwz5bJR8",
  authDomain: "eventos-app-afc6a.firebaseapp.com",
  databaseURL: "https://eventos-app-afc6a.firebaseio.com",
  projectId: "eventos-app-afc6a",
  storageBucket: "",
  messagingSenderId: "194673032235",
  appId: "1:194673032235:web:ceb464a2d5a4272f193e6e"
};



export function dataFactory(provider: CourseService) {
  return () => provider.getData();
}

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    ContentComponent,
    HeaderComponent,
    AddEventComponent,
    LoginComponent,
    CouponComponent,
    CoursesComponent,
    SanitizePipe
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
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    CourseService,
    {
      provide: APP_INITIALIZER,
      useFactory: dataFactory,
      deps: [CourseService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
