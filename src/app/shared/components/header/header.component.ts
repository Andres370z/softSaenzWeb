import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggle = new EventEmitter<any>()
  estadoMenu: boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  sideNavToggled(){
    this.estadoMenu = !this.estadoMenu;
    this.sideNavToggle.emit(this.estadoMenu)
  }
}
