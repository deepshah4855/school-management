import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sideBarOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler = ($event) => {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
