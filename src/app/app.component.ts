import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  paragraph: boolean = true;
  number: number = 0;
  buttonLog: any[] = [];

  hideParagraph() {
    this.paragraph = !this.paragraph;
    console.log(this.paragraph);
    this.number += 1;
    this.buttonLog.push(this.number);
    console.log(this.buttonLog);
  }
}
