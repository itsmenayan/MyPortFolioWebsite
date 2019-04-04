import { Component, OnInit,  } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('toggleMenu', [
      state('opened', style({
        transform: 'translate3d(0, 0, 0)',
        display:''
        
      })),
      state('closed', style({
        transform: 'translate3d(100%,0, 0)',
        display:'none'
       
      })),
      transition('opened => closed', animate('400ms ease-in-out')),
      transition('closed => opened', animate('400ms ease-in-out'))
    ]),
  ],
})
export class NavbarComponent implements OnInit {

 
  constructor(private router: Router) { }

  ngOnInit() {
  }

  menuState:string = 'closed';
 
  toggleMenu() {
    this.menuState = this.menuState === 'closed' ? 'opened' : 'closed';
  }

  test(){
    this.router.navigate(['/'], { queryParams: { term: 11 } });
  }

 
  
}

