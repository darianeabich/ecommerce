import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { mockUsers, UserListService } from '@ecommerce/user-data-access';
import { of } from 'rxjs';
import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListComponent, NoopAnimationsModule],
      providers: [
        {
          provide: UserListService,
          useValue: { getUsers: () => of(mockUsers) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return user list correctly', () => {
    const userList = component.userList.data;
    expect(userList.length).toBe(mockUsers.length);
  });

  it('should render aria-label with user name', () => {
    const button: HTMLButtonElement =
      fixture.debugElement.nativeElement.querySelector('#biographyBtn');
    expect(button.getAttribute('aria-label')).toBe(
      'Ler a biografia de Lila Kuhic'
    );
  });
});
