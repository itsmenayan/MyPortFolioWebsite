import { Component, OnInit } from '@angular/core';
import { fader } from './route-animations';
import { RouterOutlet } from '@angular/router';
// import * as firebase from 'firebase';


//const settings = {timestampsInSnapshots: true};
// const config = {
//   apiKey: "AIzaSyCd5QKjYEvZ6L7nXeeGodZNyitU2iXXnF8",
//   authDomain: "nayanportfolio.firebaseapp.com",
//   databaseURL: "https://nayanportfolio.firebaseio.com",
//   projectId: "nayanportfolio",
//   storageBucket: "nayanportfolio.appspot.com",
// };

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
export class AppComponent implements OnInit {
  title = 'Nayan Arora';

  ngOnInit() {
    // firebase.initializeApp(config);
    // //firebase.firestore().settings(settings);
    // var database = firebase.database();
    // console.log(database);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}


