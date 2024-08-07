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

  it('should render biography button aria-label with user name', () => {
    const button: HTMLButtonElement =
      fixture.debugElement.nativeElement.querySelector('#biographyBtn');
    expect(button.getAttribute('aria-label')).toBe(
      'Ler a biografia de Lila Kuhic'
    );
  });

  it('should render avatar link aria-label with user name', () => {
    const compiled = fixture.debugElement.nativeElement;
    const link: HTMLAnchorElement = compiled.querySelector('#avatarLink');
    expect(link.getAttribute('aria-label')).toBe('Ver avatar de Lila Kuhic');
  });

  it('should render tooltip view link correctly', () => {
    const compiled = fixture.debugElement.nativeElement;
    const actions: HTMLSpanElement = compiled.querySelector('#avatarLink');

    expect(actions.getAttribute('matTooltip')).toBe('Visualizar');
  });

  it('should render tooltip edit button correctly', () => {
    const compiled = fixture.debugElement.nativeElement;
    const actions: HTMLButtonElement = compiled.querySelector('#editUserBtn');

    expect(actions.getAttribute('matTooltip')).toBe('Editar');
  });

  it('should render tooltip disabled button correctly', () => {
    const compiled = fixture.debugElement.nativeElement;
    const actions: HTMLButtonElement =
      compiled.querySelector('#disableUserBtn');

    expect(actions.getAttribute('matTooltip')).toBe('Desabilitar');
  });
});
