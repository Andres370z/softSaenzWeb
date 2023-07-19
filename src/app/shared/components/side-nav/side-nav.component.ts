import { Component, Input, OnInit } from '@angular/core';
import {DomSanitizer, SafeHtml } from '@angular/platform-browser'
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() estadoNav: boolean = false
  list = [
    {
      number: '1',
      name: 'home',
      icon: "fa-solid fa-house" //cambia
    },{
      number: '1',
      name: 'home2',
      icon: "fa-solid fa-house-user" //cambia
    },{
      number: '1',
      name: 'home3',
      icon: 'fa-solid fa-house' //cambia
    }
  ]
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }
  getSafeIconHtml(icon: string): SafeHtml {
    const iconHtml = `<i class="${icon}"></i>`;
    return this.sanitizer.bypassSecurityTrustHtml(iconHtml);
  }

}
