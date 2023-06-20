import { Component, Input } from '@angular/core';
import { ToiletTrackerService } from '../../services/toilet-tracker.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-toilet-tracker-card',
  templateUrl: './toilet-tracker-card.component.html',
  styleUrls: ['./toilet-tracker-card.component.scss'],
})
export class ToiletTrackerCardComponent {
  @Input() public bmDate = '';
  @Input() public bmAmount = '0';
  @Input() public id = '';
  @Input() public sentimentDuring = '0';
  @Input() public sentimentAfter = '0';
  @Input() public bmComments = '';

  constructor(public toiletTrackerService: ToiletTrackerService) {}

  deleteEvent() {
    this.toiletTrackerService.deleteEventById(this.id);
  }
}
