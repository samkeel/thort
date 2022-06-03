import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-side-nav',
  templateUrl: './note-side-nav.component.html',
  styleUrls: ['./note-side-nav.component.scss']
})
export class NoteSideNavComponent implements OnInit {

  filledNav = Array.from({length: 50}, (_, i) => `Category item ${i + 1}`);

  constructor() { }

  ngOnInit(): void {
  }

}
