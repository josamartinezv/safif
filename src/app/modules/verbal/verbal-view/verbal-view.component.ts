import { Component, OnInit } from '@angular/core';
import { IVerbal } from '../verbal';
import { VerbalService } from '../verbal.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-verbal-view',
  templateUrl: './verbal-view.component.html',
  styleUrls: ['./verbal-view.component.styl']
})
export class VerbalViewComponent implements OnInit {



  verbalList: IVerbal[]=[];
  pageNumber = 0;
  pageSize = 5;
  totalRecords: any;

  searchForm = this.formBuilder.group({
    documentNumber: ['', [
                          Validators.pattern('[0-9.]*'),
                          Validators.minLength(5)]],
    documentNumberInstructor: ['',[
                                   Validators.pattern('[0-9.]*'),
                                   Validators.minLength(5)]],
    number: ['',[
                 Validators.pattern('[0-9.]*'),
                 Validators.minLength(5)]],
    phaseVerbalCalled:'',
    typeVerbalCalled:'',
    state:''
  });

  constructor(
    private formBuilder: FormBuilder,
    private verbalService: VerbalService,
   ) { }

  ngOnInit() {
   this.loadPagenation({page: this.pageNumber});
  }


  searchByFilters(modFilter: any): void{
    modFilter.pageSize = this.pageSize;
    modFilter.pageNumber = this.pageNumber;

    this.verbalService.getVerbalCalledByFilters(modFilter)
    .subscribe((res: any) =>{
      console.warn('RES ', res);
      this.verbalList = res.content;
      this.totalRecords = res.totalElements;

    }, error => {
      console.error('Error ', error)
    });
  }

  modFilter(): void{
    console.warn('Filters....', this.searchForm.value.documentNumber);
    console.warn('Number....', this.searchForm.value.number);
    console.warn('TypeVerbalCalled....', this.searchForm.value.typeVerbalCalled);
    console.warn('State....', this.searchForm.value.state);

    const puntualMod = {};
    if (this.searchForm.value.documentNumber) {
      puntualMod['documentNumber'] = this.searchForm.value.documentNumber;
    } else {
      delete puntualMod['documentNumber'];
    }
    if (this.searchForm.value.documentNumberInstructor) {
      puntualMod['documentNumberInstructor'] = this.searchForm.value.documentNumberInstructor;
    } else {
      delete puntualMod['documentNumberInstructor'];
    }
    if (this.searchForm.value.number) {
      puntualMod['number'] = this.searchForm.value.number;
    } else {
      delete puntualMod['number'];
    }

    if (this.searchForm.value.typeVerbalCalled) {
      puntualMod['typeVerbalCalled'] = this.searchForm.value.typeVerbalCalled;
    } else {
      delete puntualMod['typeVerbalCalled'];
    }
    if (this.searchForm.value.phaseVerbalCalled) {
      puntualMod['phaseVerbalCalled'] = this.searchForm.value.phaseVerbalCalled;
    } else {
      delete puntualMod['phaseVerbalCalled'];
    }
    if (this.searchForm.value.state) {
      puntualMod['state'] = this.searchForm.value.state;
    } else {
      delete puntualMod['state'];
    }

    this.searchByFilters(puntualMod);
  }


  loadPagenation(event: any): void{

    console.log('event ', event);
    this.verbalService.getVerbalCalledByFilters({
      'documentNumber': this.searchForm.value.documentNumber,
      'documentNumberInstructor': this.searchForm.value.documentNumberInstructor,
      'number': this.searchForm.value.number,
      'phaseVerbalCalled': this.searchForm.value.phaseVerbalCalled,
      'typeVerbalCalled': this.searchForm.value.typeVerbalCalled,
      'state': this.searchForm.value.state,
      pageSize: this.pageSize,
      pageNumber: event.page
    })

    .subscribe((res: any) => {
      console.log('Data page', res);
      this.verbalList = res.content;
      this.totalRecords = res.totalElements;

    }, error => {
      console.error('Error ', error);
    });
  }

  switchState(item: IVerbal[]): void {
    console.warn('Take on', item);
    this.verbalService.getMyVerbalCalled(item)
    .subscribe(res => {
      console.warn('Send');
    })


  }

  download(): void{
    const fileName = `reporte.xlsx`
    this.verbalService.reportFile()
    .subscribe(res =>{
      this.manageExcelFile(res, fileName);

    });
  }

  manageExcelFile(response: any, fileName: string): void{
    const dataType = response.Type;
    const binaryData = [];
    binaryData.push(response);

    const filePath = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
    const downloadLink = document.createElement('a');
    downloadLink.href = filePath;
    downloadLink.setAttribute('download' , fileName);
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }




}
