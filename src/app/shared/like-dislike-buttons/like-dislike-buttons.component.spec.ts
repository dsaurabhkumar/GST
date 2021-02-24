import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeDislikeButtonsComponent } from './like-dislike-buttons.component';

describe('LikeDislikeButtonsComponent', () => {
  let component: LikeDislikeButtonsComponent;
  let fixture: ComponentFixture<LikeDislikeButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeDislikeButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeDislikeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
