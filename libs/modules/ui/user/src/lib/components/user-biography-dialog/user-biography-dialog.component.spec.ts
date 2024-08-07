import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { User } from '@ecommerce/user-data-access';
import { UserBiographyDialogComponent } from './user-biography-dialog.component';

describe('UserBiographyDialogComponent', () => {
  let component: UserBiographyDialogComponent;
  let fixture: ComponentFixture<UserBiographyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserBiographyDialogComponent,
        MatDialogModule,
        NoopAnimationsModule,
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: { data: [] as User[] },
        },
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserBiographyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should received user data correctly', () => {
    const user: User = component.user;
    expect(user).toBeTruthy();
  });
});
