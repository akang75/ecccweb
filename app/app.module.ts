import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app.component';
import { TopNavComponent } from './Components/topnav.component';
import { LanguageService } from './Services/language.service';
import {MessageComponent} from './Components/MessagePage/message.component'
import { HttpModule, Http } from '@angular/http';
import { JsonLoadService } from './Services/jsonload.service';
import {HomeComponent} from './Components/HomePage/home.component';
import { MeetingComponent } from './Components/MeetingPage/meeting.component';
import { NavbarComponent } from './Components/navbar.component';
import { PhotoGalleryComponent } from './Components/HomePage/photogallery.component';
import { AboutComponent } from './Components/AboutPage/about.component';
import { GodWordComponent } from './Components/GodWordPage/godword.component';
import { GospelComponent } from './Components/GospelPage/gospel.component';
import { FellowshipComponent } from './Components/FellowshipPage/fellowship.component';
import { ArchivedMessageComponent } from './Components/MessagePage/archivedmessage';

const appRoutes: Routes = [ 
  { path: '', component: HomeComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'Meeting', component: MeetingComponent},
  { path: 'About', component: AboutComponent},
  { path: 'Message', component: MessageComponent },
  { path: 'GodWord', component: GodWordComponent },
  { path: 'Gospel', component: GospelComponent},
  { path:'Fellowship', component:FellowshipComponent}
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, 
                  HomeComponent, 
                  MeetingComponent, 
                  NavbarComponent, 
                  MessageComponent,
                  TopNavComponent, 
                  PhotoGalleryComponent,
                  AboutComponent,
                  GodWordComponent,
                  GospelComponent,
                  FellowshipComponent,
                  ArchivedMessageComponent
                ],
  bootstrap:    [ AppComponent ],  
  providers:    [LanguageService, JsonLoadService],
})

export class AppModule { }