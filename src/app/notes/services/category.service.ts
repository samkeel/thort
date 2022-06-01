import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { CategoryData } from '../models/category-data.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private snackbarService: SnackbarService
  ) { }

  async createNewCategory(categoryData: CategoryData) {
    const user = await this.afAuth.currentUser;
    return this.afs
      .collection('categories')
      .add({
        ...categoryData,
        uid: user?.uid,
      })
      .then(() => this.snackbarService.openSnackBar(`Category '${categoryData.title}' added`, ''))
      .catch((error) => {
        this.snackbarService.openSnackBar(error.message, '');
      });
  }
  
  readCategory(categoryID: string) {
    return this.afs.collection('notes').doc(categoryID);
  }

  updateNote(categoryID: string, categoryData: CategoryData) {
    return this.afs.collection('notes').doc(categoryID).update(categoryData);
  }

  deleteNote(categoryID: string) {
    return this.afs.collection('notes').doc(categoryID).delete();
  }

}
