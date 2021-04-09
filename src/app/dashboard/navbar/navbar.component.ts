import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {

  isActive = false;
  @Output()
  openEvent = new EventEmitter<boolean>();

  constructor(

  ) { }

  ngOnInit(): void {
  }


  changeEvent(): void{

    this.isActive = !this.isActive;
    this.openEvent.emit(this.isActive);
    console.log("Este es Navbar" , this.isActive)
  }


}
