import { Component } from '@angular/core';
import { fader } from './route-animations';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fader// <-- add your animations here
    // fader,
    // slider,
    // transformer,
    //stepper
  ]
})
export class AppComponent {
  title = 'Nayan Arora';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}


