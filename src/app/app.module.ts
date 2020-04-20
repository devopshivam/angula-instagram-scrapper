import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserDataService } from './user-data.service';

const appRoutes = Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
];
@NgModule({
  imports:      [ BrowserModule, FormsModule, FontAwesomeModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, SearchBarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserDataService]
})
export class AppModule { }
