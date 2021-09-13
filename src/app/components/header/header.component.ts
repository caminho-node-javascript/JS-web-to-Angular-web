import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navbarClick()
  {
    document.querySelector(".offcanvas-collapse").classList.toggle("open");
  }

  toggleDropdown(e)
  {
    const _d = e.target.closest(".dropdown");
    let _m = document.querySelector(".dropdown-menu");

    setTimeout(
        function () {
        const shouldOpen = _d.matches(":hover");
        _m.classList.toggle("show", shouldOpen);
        _d.classList.toggle("show", shouldOpen);

        _d.setAttribute("aria-expanded", shouldOpen);
        },
        e.type === "mouseleave" ? 300 : 0
    );

  }

}
