import { Component, OnInit, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Customer } from '../../models/customer.class';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips'
import { Firestore, collectionData, collection, doc, onSnapshot, addDoc, updateDoc, deleteDoc, orderBy, limit, query, Timestamp } from '@angular/fire/firestore';

interface projectManager {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-internal-information-dialog',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatDialogModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatListModule, MatSelectModule, MatChipsModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './edit-internal-information-dialog.component.html',
  styleUrl: './edit-internal-information-dialog.component.scss'
})
export class EditInternalInformationDialogComponent {

  //FireStore Service
  firestore = inject(Firestore);

  selectedTasks: string[] = [];

  // Definition of logistical tasks
  logisticalTasks: string[] = ['Inbound', 'Storage', 'Outbound', 'Returns', 'VAS'];

  // Definition of logistic sectors
  logisticsSector: string[] = ['Fashion & Lifestlye', 'Food', 'Automotiv', 'Healthcare'];

  // Definition of logistic sectors
  projectStatus: string[] = ['active', 'implementation', 'inactive', 'in progress'];

  projectManager: projectManager[] = [
    { value: 'Hans Mueller', viewValue: 'Hans Mueller' },
    { value: 'Peter Hansen', viewValue: 'Peter Hansen' },
    { value: 'Julia Maier', viewValue: 'Julia Maier' },
  ]

  constructor(@Inject(MAT_DIALOG_DATA) public customer: Customer, public dialogRef: MatDialogRef<EditInternalInformationDialogComponent>, private fb: FormBuilder) {

  }

  ngOnInit() {
  //lädt die bereits ausgewählten Tasks bzw. speichert sie 
  this.selectedTasks = this.customer.logisticalTasks ?? [];
}

  closeAddCustomerDialog() {
    this.dialogRef.close();
  }

  async saveChanges() {
    if (!this.customer.id) {
      console.error('Customer ID is missing!');
      return;
    }
  
    const customerRef = doc(this.firestore, 'customers', this.customer.id!);
  
    await updateDoc(customerRef, {
      projectStatus: this.customer.projectStatus,
      projectManager: this.customer.projectManager,
      logisticSector: this.customer.logisticSector,
      logisticalTasks: this.selectedTasks,
      goLive: this.customer.goLive
    });
  
    this.dialogRef.close(true);
  }
  

}
