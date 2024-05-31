import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudForumComponent } from './crudForum.component';

describe('ForumComponent', () => {
  let component: CrudForumComponent;
  let fixture: ComponentFixture<CrudForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudForumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
