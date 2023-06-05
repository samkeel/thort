import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() public title = '';
  @Input() public content = '';
  @Input() public id = '';
  @Input() public summary = '';

  noteId: string = '';

  constructor(
    public noteService: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}
}
