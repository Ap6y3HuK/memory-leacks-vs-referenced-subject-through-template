import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TargetComponent } from "./target/target.component";
import { SubjectStorage } from "./SubjectStorage";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatButtonModule],
  declarations: [AppComponent, TargetComponent],
  providers: [SubjectStorage],
  bootstrap: [AppComponent]
})
export class AppModule {}
