import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  ref = firebase.firestore().collection('testimonials');

  constructor() {}

  getTestimonials(): Observable<any> {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        let boards = [];
        querySnapshot.forEach((doc) => {
          debugger;
          console.log(doc.data);
          // let data = doc.data();
          // boards.push({
          //   key: doc.id,
          //   title: data.title,
          //   description: data.description,
          //   author: data.author
          // });
        });
        observer.next(boards);
      });
    });
  }
  
  // getBoard(id: string): Observable<any> {
  //   return new Observable((observer) => {
  //     this.ref.doc(id).get().then((doc) => {
  //       let data = doc.data();
  //       observer.next({
  //         key: doc.id,
  //         title: data.title,
  //         description: data.description,
  //         author: data.author
  //       });
  //     });
  //   });
  // }
  
  // postBoards(data): Observable<any> {
  //   return new Observable((observer) => {
  //     this.ref.add(data).then((doc) => {
  //       observer.next({
  //         key: doc.id,
  //       });
  //     });
  //   });
  // }
  
  // updateBoards(id: string, data): Observable<any> {
  //   return new Observable((observer) => {
  //     this.ref.doc(id).set(data).then(() => {
  //       observer.next();
  //     });
  //   });
  // }
  
  // deleteBoards(id: string): Observable<{}> {
  //   return new Observable((observer) => {
  //     this.ref.doc(id).delete().then(() => {
  //       observer.next();
  //     });
  //   });
  // }


}
