import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app.component';
import { LoginComponent }   from './app.Logincomponent';
import { WelcomeComponent }   from './app.Welcomecomponent';
import { DefaultComponent }   from './app.DefaultComponent';
import { LanguageNavComponent } from './Components/languagenav.component';
import { TopNavComponent } from './Components/topnav.component';
import { LanguageService } from './Services/language.service';

const appRoutes: Routes = [ 
  
  { path: 'Login', component: LoginComponent },
  { path: 'Welcome', component: WelcomeComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,LoginComponent,WelcomeComponent,DefaultComponent,LanguageNavComponent,TopNavComponent],
  bootstrap:    [ AppComponent ],  
  providers:    [LanguageService],
})

export class AppModule { }