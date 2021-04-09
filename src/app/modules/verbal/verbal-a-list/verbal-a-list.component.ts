import { Component, OnInit } from '@angular/core';
import { VerbalService } from '../verbal.service';
import { IVerbal } from '../verbal';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDetailUsers } from '../../detail-user/detailUser';
import { AccountService } from 'src/app/auth/account.service';


@Component({
  selector: 'app-verbal-a-list',
  templateUrl: './verbal-a-list.component.html',
  styleUrls: ['./verbal-a-list.component.styl']
})
export class VerbalAListComponent implements OnInit {

  verbalList: IVerbal[]=[];
  detailUser: IDetailUsers;

  detailUserList: IDetailUsers[]=[];


  pageNumber = 0;
  pageSize = 5;
  totalRecords: any;


  searchForm = this.formBuilder.group({
    documentNumber: this.accountService.getDocumentNumber()

  });

  constructor(
    private verbalService: VerbalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountService

  ) { }

  ngOnInit(): void {
    this.loadPagenation({page: this.pageNumber});

    this.accountService.getDocumentNumber();
  }
  getDocumentNumber(): string{
    return this.accountService.getDocumentNumber();
    }

  getVerbalCalled(): void {
    console.warn('documentNumber ', this.searchForm.value.documentNumber);
    this.verbalService.getVerbalCalledByDocument({
      'documentNumber': this.searchForm.value.documentNumber,
      'pageNumber': 0,
      'pageSize': 5
    })
    .subscribe((res: any)=> {
      console.log('get data ', res);
      this.verbalList = res.content;
      this.totalRecords = res.totalElements; //borrar
    }, error => {
      console.error('error ', error)
    });
  }

  loadVerbalAprentice(idVerbalCalled: number): void{
    this.router.navigate(['./dashboard/verbal/verbal-a-update', idVerbalCalled]);
  }





  loadPagenation(event: any): void {
    console.log('event', event)
    this.verbalService.getVerbalCalledByDocument({
      'documentNumber': this.searchForm.value.documentNumber,
      pageSize: this.pageSize,
      pageNumber: event.page
    })
    .subscribe((res: any)=> {
      console.log('get data ', res);
      this.verbalList = res.content;
      this.totalRecords = res.totalElements;
    }, error => {
      console.error('error ', error)
    });
  }




}
