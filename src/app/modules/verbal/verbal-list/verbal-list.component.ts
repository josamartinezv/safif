import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { IUsersProgram } from '../../usershasprogram/usershasprogram';
import { UsershasprogramService } from '../../usershasprogram/usershasprogram.service';
import { Validators } from '@angular/forms';
import { VerbalService } from '../verbal.service';
import { IVerbal } from '../verbal';



@Component({
  selector: 'app-verbal-list',
  templateUrl:'./verbal-list.component.html',
  styleUrls: ['./verbal-list.component.styl']
})
export class VerbalListComponent implements OnInit {

  usersprogramList: IUsersProgram[] = [];
  verbalList: IVerbal[] = [];
  

  pageNumber = 0;
  pageSize = 5;
  totalRecords: any;

  searchForm = this.formBuilder.group({
    number: ['' ,[ Validators.pattern('[0-9]*'), 
                   Validators.minLength(5)]],
    documentNumber: ['' ,[ Validators.pattern('[0-9]*'), 
                           Validators.minLength(5)]]
  });

  noUser = false;

  noDocument = false;

  noVerbal = false;

  constructor(
    private formBuilder: FormBuilder,
    private usersHasprogramService: UsershasprogramService,
    private verbalService: VerbalService
  ) { }

  ngOnInit() {
    this.loadPagenation({ page: this.pageNumber });
  }

  /*
  searchByNumberAndDocument(): void {
    console.warn('FICHA......', this.searchForm.value.number);

    this.usersHasprogramService.getByProgramNumberAndUsersAndUsersCourseRol(
      {
        'number': this.searchForm.value.number,
        'documentNumber': this.searchForm.value.documentNumber,
        'pageNumber': 0,
        'pageSize': 5
      }

    )
      .subscribe((res: any) => {
        console.warn('RES ', res);
        this.usersprogramList = res.content;
      }, error => {
        console.error('Error ', error)
      });
  }
*/
 
  
  searchNumber(): void {
    console.warn('FICHA......', this.searchForm.value.number);

    this.usersHasprogramService.getUsersHasCourseByNumber(
      {
        'number': this.searchForm.value.number,
        'pageNumber': 0,
        'pageSize': 5
      }

    )
      .subscribe((res: any) => {
        this.noUser = false;
        console.warn('RES ', res);
        this.usersprogramList = res.content;
        
      }, error => {
        this.noUser = true;
        console.error('Error ', error)
      });
  }

  searchByDocumentNumber(): void {
    console.warn('FICHA......', this.searchForm.value.documentNumber);
    this.usersHasprogramService.getUsersHasCourseByDocumentNumber(
      {
        'documentNumber': this.searchForm.value.documentNumber,
        'pageNumber': 0,
        'pageSize': 1
      }

    )
    
      .subscribe((res: any) => {
        console.warn('RES ', res);
        this.usersprogramList = res.content;
        this.noDocument = false;
      }, error => {
        this.noDocument = true;
        console.error('Error ', error)
      });
  

    this.verbalService.getVerbalCalledByDocument(
      {
        'documentNumber': this.searchForm.value.documentNumber,
        'pageNumber': 0,
        'pageSize': 5
      }

    )
      .subscribe((res: any) => {
        console.warn('RES ', res);
        this.verbalList = res.content;
        this.noVerbal = false;
      }, error => {
        this.noVerbal = true;
        console.error('Error ', error)
      });
  }



  loadPagenation(event: any): void {

    console.log('event ', event);
    this.usersHasprogramService.getUsersHasCourseByNumber
    ({
      'number': this.searchForm.value.number,
      pageSize: this.pageSize,
      pageNumber: event.page
    })
    
      .subscribe((res: any) => {
        console.log('Data page', res);
        this.usersprogramList = res.content;
        this.totalRecords = res.totalElements;

      }, error => {
        console.error('Error ', error);
      });
    
  }
  
  loadPagenationAnother(event: any): void {
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


  /*searchByDocumentNumber(): void {
    console.warn('FICHA......', this.searchForm.value.number);

    this.verbalService.getVerbalCalledByDocument(
      {
        'documentNumber': this.searchForm.value.documentNumber,
        'pageNumber': 0,
        'pageSize': 5
      }

    )
      .subscribe((res: any) => {
        console.warn('RES ', res);
        this.verbalList = res.content;
      }, error => {
        console.error('Error ', error)
      });
  }
  */


