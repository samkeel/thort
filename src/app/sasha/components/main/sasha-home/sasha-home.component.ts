import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-sasha-home',
  templateUrl: './sasha-home.component.html',
  styleUrls: ['./sasha-home.component.scss'],
})
export class SashaHomeComponent {
  activeTab: number = 1;

  onTabChange(event: MatTabChangeEvent) {
    this.activeTab = event.index + 1;
  }
}
