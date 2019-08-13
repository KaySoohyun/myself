import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.sass']
})

export class InitComponent implements OnInit {

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
