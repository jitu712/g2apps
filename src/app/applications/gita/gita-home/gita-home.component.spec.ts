import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitaHomeComponent } from './gita-home.component';

describe('GitaHomeComponent', () => {
  let component: GitaHomeComponent;
  let fixture: ComponentFixture<GitaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
