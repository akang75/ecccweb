import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template:`
            <html> 
              <div class="header">
                <h1>
                  <a href="http://www.eccc.net">
                    <img src="images/header.png" alt="HTML tutorial" style="width:30%;height:60px;border:0;">
                  </a>
                </h1>
              </div>
              <langaguenav></langaguenav>
              <topmenu></topmenu>
            </html>
  `
})
export class AppComponent {  } 