import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor( private dataSvc: UserDataService) { }

  ngOnInit() {
  }

  sendGetRequest(){
    this.dataSvc.fetchUsers().subscribe(data => {
      console.log(data['graphql']);
    });
  }
}