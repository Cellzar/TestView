import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './modules/custom-material/custom-material.module';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './components/test/test.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BooksComponent } from './components/books/books.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { HomeComponent } from './components/home/home.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { ExcelService } from './services/excel/excel.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    NavBarComponent,
    BooksComponent,
    AuthorsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    HttpClientModule,
    AngularMultiSelectModule
  ],
  providers: [CookieService, ExcelService],
  schemas:[NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
