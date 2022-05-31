import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { NoteData } from '../models/note-data.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private snackbarService: SnackbarService
  ) {}

  async createNewNote(notedata: NoteData) {
    const user = await this.afAuth.currentUser;
    return this.afs
      .collection('notes')
      .add({
        ...notedata,
        uid: user?.uid,
      })
      .then(() => this.snackbarService.openSnackBar(`Note '${notedata.title}' added`, ''))
      .catch((error) => {
        this.snackbarService.openSnackBar(error.message, '');
      });
  }

  readNote(noteID: string) {
    return this.afs.collection('notes').doc(noteID);
  }

  updateNote(noteID: string, notedata: NoteData) {
    return this.afs.collection('notes').doc(noteID).update(notedata);
  }

  deleteNote(noteID: string) {
    return this.afs.collection('notes').doc(noteID).delete();
  }
}
