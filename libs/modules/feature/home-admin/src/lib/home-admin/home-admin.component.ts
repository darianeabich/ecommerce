import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserListComponent } from '@ecommerce/user';
import { User, UserListService } from '@ecommerce/user-data-access';
import { distinctUntilChanged, tap } from 'rxjs';

@Component({
  selector: 'ecommerce-home-admin',
  standalone: true,
  imports: [CommonModule, UserListComponent],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.scss',
})
export class HomeAdminComponent implements OnInit {
  userList: User[] = [];
  constructor(private userListService: UserListService) {}

  ngOnInit(): void {
    this.userListService
      .getUsers()
      .pipe(
        distinctUntilChanged(),
        tap((users: User[]) => {
          console.log(users);
          this.userList = users;
        })
      )
      .subscribe();
  }
}
