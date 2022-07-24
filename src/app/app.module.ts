
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
import { DdrBlockListModule } from 'ddr-block-list';
import { DdrConfigurationModule} from 'ddr-configuration';

// Services
import { DdrConfigurationService } from 'ddr-configuration';

// Pipes
import { SanitizePipe } from './pipes/sanitize.pipe';

// Components
import { AppComponent } from './app.component';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { EventsComponent } from './components/content/events/events.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { AddEditEventComponent } from './components/content/add-edit-event/add-edit-event.component';
import { LoginComponent } from './components/login/login.component';
import { ManageEventsComponent } from './components/content/manage-events/manage-events.component';

const firebaseConfig = {

};

export function configFactory(provider: DdrConfigurationService) {
  return () => provider.getDataFromJSON('./assets/locale/locale.json');
}

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    ContentComponent,
    HeaderComponent,
    AddEditEventComponent,
    LoginComponent,
    SanitizePipe,
    ManageEventsComponent
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
    NgxPaginationModule,
    DdrBlockListModule
  ],
  providers: [
    DdrConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [DdrConfigurationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
