import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './components/loader/loader.component';
import { AppDashboardComponent } from './dashboard/app-dashboard.component';
import { MaterialModule } from './modules/material/material.module';

import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { HeaderComponent } from './components/header/header.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    AppDashboardComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
