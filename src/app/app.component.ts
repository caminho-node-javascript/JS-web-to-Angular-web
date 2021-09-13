import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

declare var AOS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'js-site-angular-version';

  constructor(@Inject(DOCUMENT) private _document: Document) {

  }

  ngOnInit(): void {

    let myButton = document.getElementById("myBtn");
    fromEvent(window, "scroll").pipe(throttleTime(20)).subscribe((event) => {


      let intViewportWidth = this._document.defaultView.window.innerWidth;
      if (
        this._document.body.scrollTop > 30 || (this._document.documentElement.scrollTop > 30) && (intViewportWidth > 991)
      ) {
        document.getElementById("navbar").classList.add("top-nav-collapse");
        myButton.style.display = "block";
      } else if (
        this._document.body.scrollTop < 30 || (document.documentElement.scrollTop < 30) && (intViewportWidth > 991)
      ) {
        this._document.getElementById("navbar").classList.remove("top-nav-collapse");
        myButton.style.display = "none";
      }
    });

    AOS.init({
      duration: 1000,
      easing: "ease",
      once: false, // whether animation should happen only once - while scrolling down
    });
  }



}
