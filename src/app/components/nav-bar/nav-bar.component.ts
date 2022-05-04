import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public identidad; 

  constructor() {
    this.identidad = JSON.parse(localStorage.getItem('identidad'));

   }

  ngOnInit(): void {
    console.log(this.identidad)

  }

}
