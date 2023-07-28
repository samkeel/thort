import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import {  
  addDoc,
  collection,
  collectionChanges,
  collectionData,
  CollectionReference,
  deleteDoc,
  doc,
  docData,
  docSnapshots,
  DocumentData,
  DocumentReference,
  FieldValue,
  Firestore,
  limit,
  onSnapshot,
  orderBy,
  Query,
  query,
  serverTimestamp,
  Unsubscribe,
  where,
} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable, map } from 'rxjs';
import { DrAptData } from '../models/drapt.model';

@Injectable({
  providedIn: 'root',
})
export class DraptService {
  draptCollection!: CollectionReference<DocumentData>;
  

  constructor(private afs: Firestore) {
    this.draptCollection = collection(this.afs, 'drapt');
  }

  getAllDrApts() {
    const getAllDrApts = query(
      this.draptCollection,
      orderBy('draptDate', 'desc')
    );
    return collectionData(getAllDrApts, { idField: 'id' }) as Observable<
      DrAptData[]
    >;
  }
//   getAllDrApts() {
    
//   }
}
