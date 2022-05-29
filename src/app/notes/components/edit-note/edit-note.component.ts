import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  constructor(private navigationService: NavigationService, private snackbarService: SnackbarService) { }

  ngOnInit(): void {
  }

  backClick() {
    this.navigationService.back();
  }

  cancelClick() {
    this.snackbarService.openSnackBar('Cancel', '')
  }

}
