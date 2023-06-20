import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormatAf'
})
// export class DateFormatAfPipe extends DatePipe implements PipeTransform {

//   override transform(value: any, args?: any): any {
//     return super.transform(value.toDate(), args);
//   }

// }
export class DateFormatAfPipe implements PipeTransform {

  transform(value: any, format: string = 'mediumDate'): any {
    const datePipe = new DatePipe('en-US');
    const transformedDate = datePipe.transform(value.toDate(), format);
    return transformedDate;
  }

}
