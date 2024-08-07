import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { User, UserListService } from '@ecommerce/user-data-access';
import { UserFormComponent } from '@ecommerce/user-form';
import {
  UserAvatarDialogComponent,
  UserBiographyDialogComponent,
} from '@ecommerce/user-ui';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ecommerce-user-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = [
    'avatar',
    'name',
    'email',
    'biography',
    'actions',
  ];

  userListService = inject(UserListService);
  userList = new MatTableDataSource<User>();
  private subscription: Subscription = new Subscription();

  readonly dialog = inject(MatDialog);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.subscription = this.userListService.getUsers().subscribe((users) => {
      this.userList.data = users;
    });
  }

  ngAfterViewInit() {
    this.userList.paginator = this.paginator;
    this.userList.sort = this.sort;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  /**
   * @description Abertura do dialog de biografia do usuário selecionado
   * @author Dariane Abich
   * @date 07/08/2024
   * @param {User} user
   * @memberof UserListComponent
   */
  openBiography(user: User) {
    this.dialog.open(UserBiographyDialogComponent, {
      width: '500px',
      disableClose: true,
      data: user,
    });
    console.log(user.biography);
  }

  /**
   * @description Abertura do dialog de registro ou edição do usuário
   * @author Dariane Abich
   * @date 07/08/2024
   * @param {(User | null)} user
   * @memberof UserListComponent
   */
  openRegister(user: User | null) {
    this.dialog.open(UserFormComponent, {
      width: '650px',
      disableClose: true,
      data: { user: user },
    });
  }

  /**
   * @description Abertura do dialog de imagem de perfil do usuário
   * @author Dariane Abich
   * @date 07/08/2024
   * @param {User} user
   * @memberof UserListComponent
   */
  openAvatarDialog(user: User) {
    this.dialog.open(UserAvatarDialogComponent, {
      width: '400px',
      data: user,
    });
  }
}
