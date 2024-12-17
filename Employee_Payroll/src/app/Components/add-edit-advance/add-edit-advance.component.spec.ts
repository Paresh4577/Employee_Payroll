import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAdvanceComponent } from './add-edit-advance.component';

describe('AddEditAdvanceComponent', () => {
  let component: AddEditAdvanceComponent;
  let fixture: ComponentFixture<AddEditAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditAdvanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
