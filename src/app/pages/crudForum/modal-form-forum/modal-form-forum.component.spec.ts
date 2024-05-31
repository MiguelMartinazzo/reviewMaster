import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormForumComponent } from './modal-form-forum.component';

describe('ModalFormForumComponent', () => {
  let component: ModalFormForumComponent;
  let fixture: ComponentFixture<ModalFormForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalFormForumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalFormForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
