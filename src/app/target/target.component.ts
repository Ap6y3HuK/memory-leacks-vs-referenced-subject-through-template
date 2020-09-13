import { Component, ChangeDetectionStrategy } from "@angular/core";
import { SubjectStorage } from "../SubjectStorage";
import { Observable, Subject } from "rxjs";

@Component({
  selector: 'wd-target',
  templateUrl: './target.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TargetComponent  {

  private targetComponentSubject = new Subject<void>();

  constructor(private readonly subjectStorage: SubjectStorage) {
    this.targetComponentSubject = new Subject<void>();
  }

  ngOnInit() {
    this.subscribeForSubjectStorage();
    // setInterval(this.nextSubject.bind(this), 1000);
  }

  observeMineSubject(): Observable<void> {
    return this.targetComponentSubject.asObservable();
  }

  observeSubjectStorageThroughMe(): Observable<void> {
    return this.subjectStorage.selectSubject();
  }

  subscribeForSubjectStorage(): void {
    this.subjectStorage.selectSubject()
    .subscribe(() => {
       console.log("TargetComponent - ", "notify you.");
       this.nextSubject();
    })
  }

  private nextSubject(): void {
    console.log("Subject next is called");
    this.targetComponentSubject.next();
  }
}
