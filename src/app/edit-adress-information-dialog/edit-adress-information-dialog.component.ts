import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Customer } from '../../models/customer.class';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-adress-information-dialog',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatDialogModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './edit-adress-information-dialog.component.html',
  styleUrl: './edit-adress-information-dialog.component.scss'
})
export class EditAdressInformationDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public customer: Customer, public dialogRef: MatDialogRef<EditAdressInformationDialogComponent>) {

  }

   ngOnInit(): void {
   }

  saveChanges(){

  }

  closeAddCustomerDialog() {
    this.dialogRef.close();
  }

}
