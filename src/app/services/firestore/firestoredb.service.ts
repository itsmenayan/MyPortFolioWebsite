import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoredbService {

  constructor(private firestore: AngularFirestore) { }

  getCollection() {
    return this.firestore.collection('testimonials').snapshotChanges();
  }
}
