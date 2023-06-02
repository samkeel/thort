import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNavListComponent } from './user-nav-list.component';

describe('UserNavListComponent', () => {
  let component: UserNavListComponent;
  let fixture: ComponentFixture<UserNavListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserNavListComponent]
    });
    fixture = TestBed.createComponent(UserNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
