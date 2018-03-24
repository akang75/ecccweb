import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app.component';
import { TopNavComponent } from './Components/topnav.component';
import { LanguageService } from './Services/language.service';
import {MessageComponent} from './Components/MessagePage/message.component'
import {GlodenVerseComponent} from './Components/MessagePage/goldenverse.component'
import { HttpModule, Http } from '@angular/http';
import { JsonLoadService } from './Services/jsonload.service';
import { LatestInfoComponent } from './Components/MessagePage/latestinfo.component';
import {HomeComponent} from './Components/HomePage/home.component';
import { MeetingComponent } from './Components/MeetingPage/meeting.component';
import { NavbarComponent } from './Components/navbar.component';

const appRoutes: Routes = [ 
  { path: '', component: HomeComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'Meeting', component: MeetingComponent},
  { path: 'Message', component: MessageComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, HomeComponent, MeetingComponent, NavbarComponent, MessageComponent,GlodenVerseComponent, TopNavComponent, LatestInfoComponent],
  bootstrap:    [ AppComponent ],  
  providers:    [LanguageService, JsonLoadService],
})

export class AppModule { }