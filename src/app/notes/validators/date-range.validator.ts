import { FormGroup, ValidatorFn, Validators } from '@angular/forms';

export function createTimeFrameRangeValidator(): ValidatorFn {
  return (newNoteForm: FormGroup): Validators | null => {
    const start: Date = newNoteForm.get('start').value;
    const end: Date = newNoteForm.get('end').value;

    if (start && end) {
      const isRangeValid = end.getTime() - start.getTime() > 0;

      return isRangeValid ? null : { timeFramePeriod: true };
    }

    return null;
  };
}
