import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public cookieService: CookieService,private router: Router) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.cookieService.deleteAll();
    this.cookieService.delete('token', '/');
    this.router.navigate(['']);
  }

}
