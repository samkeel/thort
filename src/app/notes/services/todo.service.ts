import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { switchMap } from 'rxjs';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { TodoData } from '../models/todo-data.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private snackbarService: SnackbarService
  ) {}

  async createNewTodo(todoData: TodoData) {
    const user = await this.afAuth.currentUser;
    return this.afs
      .collection('todo')
      .add({ ...todoData, uid: user?.uid })
      .catch((error) => {
        this.snackbarService.openSnackBar(error.message, '');
      });
  }

  // return all users todo's
  readTodos() {
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs
            .collection<TodoData>('todo', (ref) =>
              ref.where('uid', '==', user.uid).orderBy('description')
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }

  updateTodo(todoID: string, todoData: TodoData) {
    return this.afs.collection('todo').doc(todoID).update(todoData);
  }

  deleteTodo(todoID: string) {
    return this.afs.collection('todo').doc(todoID).delete();
  }
}
