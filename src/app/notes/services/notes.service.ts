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
  Firestore,
  onSnapshot,
  orderBy,
  Query,
  query,
  Unsubscribe,
  where,
} from '@angular/fire/firestore';
import { Note } from '../models/note.model';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/operators';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private noteCollection!: CollectionReference<DocumentData>;

  constructor(
    private afs: Firestore,
    private afAuth: Auth,
    private snackbarService: SnackbarService
  ) {
    this.noteCollection = collection(this.afs, 'Notes');
  }

  async createNote(note: Note) {
    const user = await this.afAuth.currentUser;
    let content = note.content as string;
    note.summary = this.contentSummary(content);
    addDoc(this.noteCollection, { ...note, uid: user?.uid });
    return this.snackbarService.openSnackBar('New note added', '');
  }

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

  // delete single note by ID
  deleteNoteById(id: string) {
    const delDoc = doc(this.afs, `Notes/${id}`);
    this.snackbarService.openSnackBar('Note deleted', '');
    return deleteDoc(delDoc);
  }

  contentSummary(content: string, length: number = 50): string {
    let summary = content.slice(0, length);

    if (content.length > length) {
      summary += '...';
    }
    return summary;
  }
}
