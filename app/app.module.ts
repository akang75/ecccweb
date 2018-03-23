import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app.component';
import { WelcomeComponent }   from './app.Welcomecomponent';
import { DefaultComponent }   from './app.DefaultComponent';
import { LanguageNavComponent } from './Components/languagenav.component';
import { TopNavComponent } from './Components/topnav.component';
import { LanguageService } from './Services/language.service';
import {HomeComponent} from './Components/HomePage/home.component'
import {GlodenVerseComponent} from './Components/HomePage/goldenverse.component'
import { HttpModule, Http } from '@angular/http';
import { JsonLoadService } from './Services/jsonload.service';
import { LatestInfoComponent } from './Components/HomePage/latestinfo.component';

const appRoutes: Routes = [ 
  {path: '', component: HomeComponent},
  { path: 'Home', component: HomeComponent },
  { path: 'Welcome', component: WelcomeComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,HomeComponent,GlodenVerseComponent, WelcomeComponent,DefaultComponent,LanguageNavComponent,TopNavComponent, LatestInfoComponent],
  bootstrap:    [ AppComponent ],  
  providers:    [LanguageService, JsonLoadService],
})

export class AppModule { }