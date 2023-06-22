import { Timestamp } from "@angular/fire/firestore";

export interface ToiletTracker {
  id?: string;
  bmAmount: number;
  bmDate: Timestamp;
  bmComments: string;
  sentimentAfter: number;
  sentimentDuring: number;
}
