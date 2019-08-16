import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.sass']
})

export class MenulistComponent implements OnInit {

  botones = [
    {label: "Landing page", route: "/landing", disable: true},
    {label: "Notebook", route: "/notebook", disable: true},
    {label: "Terminal emulator", route: "/term", disable: true},
    {label: "Letter", route: "/letter", disable: false}
  ]

  constructor() { }

  ngOnInit() {
  }

}
