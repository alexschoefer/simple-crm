import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdressInformationDialogComponent } from './edit-adress-information-dialog.component';

describe('EditAdressInformationDialogComponent', () => {
  let component: EditAdressInformationDialogComponent;
  let fixture: ComponentFixture<EditAdressInformationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAdressInformationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAdressInformationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
