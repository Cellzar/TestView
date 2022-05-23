import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general/general.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading: boolean = false;
  constructor(public service: GeneralService) { }

  ngOnInit(): void {
  }

  save(){
    this.loading = true;
    this.service.saveAllBookAuthor().subscribe(
      result => {
        this.loading = false;
        Swal.fire("", "Se guardo satisfactoriamente los autores y libros", "success");
      },error => {
        console.log(error);
        this.loading = false;
        Swal.fire( error.error, 'warning');
      }
    );
  }

}
