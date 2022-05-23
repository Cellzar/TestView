import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './components/authors/authors.component';
import { BooksComponent } from './components/books/books.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './components/test/test.component';
import { SecurityGuard } from './security/security.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'Test', component: TestComponent, canActivate: [SecurityGuard], children: [
      { path: '', component: HomeComponent, canActivate: [SecurityGuard] },
      { path: 'home', component: HomeComponent, canActivate: [SecurityGuard] },
      { path: 'books', component: BooksComponent, canActivate: [SecurityGuard] },
      { path: 'authors', component: AuthorsComponent, canActivate: [SecurityGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
