import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteSideNavComponent } from './note-side-nav.component';

describe('NoteSideNavComponent', () => {
  let component: NoteSideNavComponent;
  let fixture: ComponentFixture<NoteSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
