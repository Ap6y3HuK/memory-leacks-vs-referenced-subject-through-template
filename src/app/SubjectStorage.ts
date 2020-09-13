import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable()
export class SubjectStorage {
  private readonly subject = new Subject<void>();

  selectSubject(): Observable<void> {
    return this.subject.asObservable();
  }

  tickSubject(): void {
    console.log("Subject ticked.");
    this.subject.next();
  }
}
