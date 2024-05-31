import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewForumComponent } from './modal-view-forum.component';

describe('ModalViewForumComponent', () => {
  let component: ModalViewForumComponent;
  let fixture: ComponentFixture<ModalViewForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalViewForumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalViewForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
