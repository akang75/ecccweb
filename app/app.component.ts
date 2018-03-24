import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template:`
              
              <div class="wrapper">
                <div class="sidebar" data-color="blue" data-image="">
                  <topmenu></topmenu>
                  <div class="sidebar-background" style="background-image: url(/assets/img/sidebar-5.jpg)"></div>
                </div>  
                <div class="main-panel">
                  <navbar-cmp></navbar-cmp>
                  <router-outlet></router-outlet>
                </div>
              </div>
  `
})
export class AppComponent {  } 