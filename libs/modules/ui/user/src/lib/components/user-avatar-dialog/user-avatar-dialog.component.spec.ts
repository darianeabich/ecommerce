import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAvatarDialogComponent } from './user-avatar-dialog.component';

describe('UserAvatarDialogComponent', () => {
  let component: UserAvatarDialogComponent;
  let fixture: ComponentFixture<UserAvatarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAvatarDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserAvatarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
