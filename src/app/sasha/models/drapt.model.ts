import { Timestamp } from "@angular/fire/firestore";

export interface DrAptData {
    id?: string;
    draptDate: Timestamp;
    aptName: string;
    aptDescription: string;
}