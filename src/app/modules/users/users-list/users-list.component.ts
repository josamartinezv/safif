import { Component, OnInit } from '@angular/core';
import { IUsers } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.styl']
})
export class UsersListComponent implements OnInit {

  users: IUsers[] = [];

  pageNumber = 0;
  pageSize = 5;
  totalRecords: any;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.loadPagenation({page: this.pageNumber});

    this.usersService.searchUser({
      'pageNumber': 0,
      'pageSize': 5
    })
    .subscribe((res: any)=> {
      console.log('get data ', res);
      this.users = res.content;
    }, error => {
      console.error('error ', error)
    });
  }


  loadPagenation(event: any): void {
    console.log('event', event)
    this.usersService.searchUser({
      pageSize: this.pageSize,
      pageNumber: event.page
    })
    .subscribe((res: any)=> {
      console.log('get data ', res);
      this.users = res.content;
      this.totalRecords = res.totalElements;
    }, error => {
      console.error('error ', error)
    });
  }

  
}
