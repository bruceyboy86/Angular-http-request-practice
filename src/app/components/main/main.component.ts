import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { IUser } from 'src/app/modals/modals';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  users: IUser[] = [];

  constructor(private http: HttpService) {}

  // this will be used for an asynchronus call
  user$ = this.http.getUsersAsync();

  // this will be used for a subscription
  ngOnInit(): void {
    this.http.getUsers().subscribe((res) => {
      this.users = res;
    });
  }
}
