import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { BpObserverService } from 'src/app/shared/services/bp-observer.service';
import { Observable } from 'rxjs';
import { Note } from '../../models/note.model';
import { routeFadeStateTrigger } from 'src/app/shared/animations/route-animations';
import { staggerListAnimation } from '../../animations/staggered-list.animation';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  animations: [routeFadeStateTrigger, staggerListAnimation],
})
export class NotesComponent implements OnInit, OnDestroy {
  @HostBinding('@routeFadeState') routeAnimation = true;

  isHandsetPortrait$: Observable<boolean> = this.bpoService.HandsetPortrait$;
  notes$!: Observable<Note[]>;

  constructor(
    private bpoService: BpObserverService,
    public noteService: NotesService
  ){}

  ngOnInit(): void {
    this.notes$ = this.noteService.getAllNotes();
  }

  ngOnDestroy(): void {

  }

  newNote() {
    
  }

}
