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
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConductService {
  conductCollection!: CollectionReference<DocumentData>;

  constructor(
    private afs: Firestore,
    private afAuth: Auth,
    private snackbarService: SnackbarService
  ) {
    this.conductCollection = collection(this.afs, 'conduct');
  }
}
