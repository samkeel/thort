import { DatePipe, formatDate } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
// import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormatAf',
})

export class DateFormatAfPipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(timestamp: Timestamp, format?: string): string {
    return formatDate(timestamp.toDate(), format || 'dd/MM/yy', this.locale);
  }
}
