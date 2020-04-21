import { Component, OnInit, Input, Output } from '@angular/core';
import { UserDataService } from '../service/user-data.service';
import { User, PurpleEdge } from '../models/rootobject';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  public user: User;
  public posts: PurpleEdge;
  flag = true;
  search = '';

  constructor(private dataSvc: UserDataService) {}

  ngOnInit() {}

  sendGetRequest() {
    this.dataSvc.fetchUsers(this.search).subscribe((data) => {
      console.log(data);
      this.user = data.graphql.user;
      this.posts = data.graphql.user.edge_owner_to_timeline_media;
      this.flag = false;
    });
  }
}
