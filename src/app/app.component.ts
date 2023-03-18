import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  paragraph: boolean = true;
  buttonClicks: any[] = [];

  hideParagraph() {
    this.paragraph = !this.paragraph;
    console.log(this.paragraph);
    this.buttonClicks.push(this.buttonClicks.length + 1);
    console.log(this.buttonClicks);
  }
}
