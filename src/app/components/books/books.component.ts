import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Author } from 'src/app/models/Author';
import { Book } from 'src/app/models/Book';
import { ExcelService } from 'src/app/services/excel/excel.service';
import { GeneralService } from 'src/app/services/general/general.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public listAuthors: Author[] = [];
  public dropdownSettingsdefault: {} = {};
  public author:any;
  public fechaInicial: any;
  public fechaFinal: any;
  public loading: boolean = false;
  public datas:any;
  public descargar: boolean = false;
  displayedColumns: string[] = ['id', 'title', 'description', "excerpt", "pageCount", "publicDate"];
  dataSource!: MatTableDataSource<Book>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public service: GeneralService, public excel: ExcelService) { 
    this.getAuthors();
    this.dropdownSettingsdefault = {
      singleSelection: true,
      primaryKey: 'id',
      labelKey: 'firstName',
      badgeShowLimit: 3,
      enableSearchFilter: false,
      enableCheckAll: false,
      enableFilterSelectAll: false,
      text: 'SELECCIONE CAMPO',
    };
  }

  ngOnInit(): void {
    
  }


  getAuthors(){
    this.service.getAuthors().subscribe(
      result => {
        this.listAuthors = result;
        console.log(result);
      },
      error => {
        console.log(error);
      }
    )
  }

  getBooks(){
    this.descargar = false;
    if(this.fechaInicial != undefined || this.fechaFinal != undefined){
      this.loading = true;
      this.service.getBooksByAuthor(this.author[0].idBook,this.fechaInicial, this.fechaFinal ).subscribe(
        result => {
          console.log(result);
          this.datas = result.data;
          this.descargar = true;
          this.dataSource = new MatTableDataSource<Book>(result.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.loading = false;
        },
        error => {
          console.log(error);
          this.descargar = false;
          this.loading = false;
        }
      )
    }else{
      Swal.fire('Error', 'Ingrese campos requeridos', 'warning');
    }
  }

  descargarExcel(){
    this.excel.exportAsExcelFile(this.datas, 'Registros_Log');
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}
