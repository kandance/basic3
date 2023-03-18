import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  paragraph: boolean = true;

  hideParagraph() {
    this.paragraph = !this.paragraph;
    console.log(this.paragraph);
  }
}
