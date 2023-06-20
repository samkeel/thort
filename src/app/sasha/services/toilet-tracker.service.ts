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
  onSnapshot,
  orderBy,
  Query,
  query,
  serverTimestamp,
  Unsubscribe,
  where,
} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { ToiletTracker } from '../models/tTracker.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToiletTrackerService {
  private toiletTrackerCollection!: CollectionReference<DocumentData>;

  constructor(
    private afs: Firestore,
    private afAuth: Auth,
    private snackbarService: SnackbarService
  ) {
    this.toiletTrackerCollection = collection(this.afs, 'toiletTracker');
  }

  async createBM(toiletTracker: ToiletTracker) {
    const user = await this.afAuth.currentUser;
    addDoc(this.toiletTrackerCollection, {
      ...toiletTracker,
      uid: user?.uid,
      created: serverTimestamp(),
    });
    return this.snackbarService.openSnackBar('new data added', '');
  }

  getAllToiletEvents() {
    const allEvents = query(this.toiletTrackerCollection, orderBy('bmDate'));
    return collectionData(allEvents, { idField: 'id' }) as Observable<
      ToiletTracker[]
    >;
  }

  deleteEventById(id: string) {
    const delDoc = doc(this.afs, `toiletTracker/${id}`);
    this.snackbarService.openSnackBar('Event deleted', '');
    deleteDoc(delDoc);
  }
}
