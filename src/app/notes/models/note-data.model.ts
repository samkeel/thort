export interface NoteData {
  id?: string;
  category: string;
  title: string;
  timeframe: boolean;
  start?: Date;
  end?: Date;
  description: string;
  uid?: string;
}
