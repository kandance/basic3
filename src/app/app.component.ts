import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  paragraph: boolean = true;
  number: number = 0;
  buttonClicks: any[] = [];

  hideParagraph() {
    this.paragraph = !this.paragraph;
    console.log(this.paragraph);
    this.number += 1;
    this.buttonClicks.push(this.number);
    console.log(this.buttonClicks);
  }
}
