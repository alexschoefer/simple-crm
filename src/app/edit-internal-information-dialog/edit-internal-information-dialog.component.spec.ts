import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInternalInformationDialogComponent } from './edit-internal-information-dialog.component';

describe('EditInternalInformationDialogComponent', () => {
  let component: EditInternalInformationDialogComponent;
  let fixture: ComponentFixture<EditInternalInformationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditInternalInformationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditInternalInformationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
