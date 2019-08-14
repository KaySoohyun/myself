import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.sass']
})

export class MenulistComponent implements OnInit {

  botones = [
    {label: "Landing page", route: "/landing"},
    {label: "Notebook", route: "/notebook"},
    {label: "Terminal emulator", route: "/term"},
    {label: "Letter", route: "/letter"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
