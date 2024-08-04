import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { User } from '../models/user.model';
import { UserListService } from './user-list.service';

describe('UserListService', () => {
  let service: UserListService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UserListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return users correctly', () => {
    // Arrange
    const url = `${service.apiUrl}/users`;
    let result: User[] = [];

    // Act
    service.getUsers().subscribe((users) => (result = users));

    // Assert
    const request = httpMock.expectOne(url);
    request.flush([]);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual([]);
  });
});
