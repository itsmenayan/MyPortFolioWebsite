import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore } from 'angularfire2/firestore';



@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public items: Observable<any[]>;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    db: AngularFirestore
  ) {
    this.items = db.collection('/testimonials').valueChanges();
    console.log("Data"+this.items);

    
  }
 

  ngOnInit() {
    
  }

}
