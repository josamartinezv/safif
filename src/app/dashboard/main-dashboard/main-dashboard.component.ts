import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.styl']
})
export class MainDashboardComponent implements OnInit {

    isActive = false;

  constructor() { }

  ngOnInit(): void {
  }
  cambiar(valor: boolean): void {
    console.log("Este es el valor del evento (Main-dashboard)", valor);   

    this.isActive = valor;
  }

}
