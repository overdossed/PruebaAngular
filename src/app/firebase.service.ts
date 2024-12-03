import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  // Obtener propiedades desde Firestore
  getProperties(): Observable<any[]> {
    return this.firestore.collection('Propiedades').valueChanges();
  }
}
