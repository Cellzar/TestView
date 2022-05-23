import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from 'src/app/models/Usuario';
import { SegurityService } from 'src/app/services/segurity/segurity.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Usuario = new Usuario();
  loading: boolean = false;
  constructor(private router: Router, public service: SegurityService, public cookieService: CookieService) { }

  ngOnInit(): void {
    if(this.cookieService.get('token') != "" || this.cookieService.get('token') != undefined){
      this.router.navigate(["test"]);
    }
  }

  login(): void {
    if (this.user.user != '' && this.user.password != '') {
      this.loading = true;
      this.service.login(this.user).subscribe(
        result => {
          this.loading = false;
          console.log(result);
          this.cookieService.set('token', result['token']);
          this.router.navigate(["Test"]);
        },error =>{
          this.loading = false;
          Swal.fire('Error', error.error, 'warning');
          console.log(error);
        }
      )
    }else{
      Swal.fire('Error', 'Ingrese usuario y contraseña', 'warning');
    }
  }
}
