import {
  Component,
  VERSION,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild
} from "@angular/core";
import { SubjectStorage } from "./SubjectStorage";
import { TargetComponent } from "./target/target.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @ViewChild(TargetComponent)
  targetComponentRef: TargetComponent;

  targetComponentToggler: boolean = false;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    readonly subjectStorage: SubjectStorage
  ) {}

  toggleTargetComponent(): void {
    this.targetComponentToggler = !this.targetComponentToggler;
    this.changeDetectorRef.detectChanges();
  }

  subscribeForSubjectThroughTargetComponent(): void {
    this.targetComponentRef.observeSubjectStorageThroughMe().subscribe(() => {
      console.log(
        "AppComponent notify you, It is a tick from SubjectStorage, through TargetComponent."
      );
    });
  }

  subscribeForTargetComponentSubject(): void {
    this.targetComponentRef.observeMineSubject().subscribe(() => {
      console.log(
        "AppComponent notify you, It is a tick direct from TargetComponent."
      );
    });
  }
}
