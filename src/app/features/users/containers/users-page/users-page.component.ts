import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  displayedColumns: string[] = ['name', 'username', 'email', 'website'];
  users$: Observable<Array<User>> | null = null;

  constructor(
    private router: Router,
    private userService: UserService,
  ) {

  }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();


  }

  onRowSelect(user: User): void {
    this.router.navigate(['users', user.id]);
  }

}
