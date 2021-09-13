import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  topFunction(){
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
  }
}
