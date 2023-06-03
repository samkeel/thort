import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { BpObserverService } from 'src/app/shared/services/bp-observer.service';
import { Observable, filter } from 'rxjs';
import { Note } from '../../models/note.model';
import { routeFadeStateTrigger } from 'src/app/shared/animations/route-animations';
import { openNewNoteDialog } from '../../dialogs/new-note-dialog/new-note-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  animations: [routeFadeStateTrigger],
})
export class NotesComponent implements OnInit, OnDestroy {
  @HostBinding('@routeFadeState') routeAnimation = true;

  isHandsetPortrait$: Observable<boolean> = this.bpoService.HandsetPortrait$;
  notes$!: Observable<Note[]>;

  showStaggerCards = false;

  constructor(
    private bpoService: BpObserverService,
    public noteService: NotesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.notes$ = this.noteService.getAllNotes();
  }

  ngOnDestroy(): void {}

  newNote() {
    openNewNoteDialog(this.dialog)
      .pipe(filter((val) => !!val))
      .subscribe((val) => this.noteService.createNote(val));
  }
}
