import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';

import {
  collection,
  doc,
  docData,
  DocumentReference,
  CollectionReference,
  Firestore,
  onSnapshot,
  query,
  where,
  Unsubscribe,
  Query,
  DocumentData,
  collectionData,
  collectionChanges,
  docSnapshots,
  orderBy
} from '@angular/fire/firestore';
import { Note } from '../models/note.model';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(
    private afs: Firestore,
    private afAuth: Auth,
  ) { }

  // Read all notes owned by current user
  getAllNotes() {
    return authState(this.afAuth).pipe(
      switchMap((user) => {
        if (user) {
          const allUserNotes = query(
            collection(this.afs, `Notes/`),
            where('uid', '==', user?.uid),
            orderBy('title')
          );
          return collectionData(allUserNotes, { idField: 'id' }) as Observable<
            Note[]
          >;
        } else {
          return [];
        }
      })
    );
  }

}
