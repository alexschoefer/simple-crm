import { Injectable, inject } from '@angular/core';
import { Component, OnInit,  } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Customer } from '../../models/customer.class';
import { FormsModule } from '@angular/forms';
import { Firestore, collectionData, collection, doc, onSnapshot, addDoc, updateDoc, deleteDoc, orderBy, limit, query, Timestamp } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilder, FormGroup} from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips'

interface projectManager {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule,
    MatDialogModule,
    MatListModule,
    MatSelectModule,
    MatRadioModule,
    CommonModule,
    MatChipsModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-add-customer.component.html',
  styleUrls: ['./dialog-add-customer.component.scss'] 
})
export class DialogAddUserComponent implements OnInit {

  // Selected logistical task
  selectedTasks: string[] = [];

  customer = new Customer();
  goLive!: Date;
  firestore = inject(Firestore);

  // Definition of logistical tasks
  logisticalTasks: string[] = ['Inbound', 'Storage', 'Outbound', 'Returns', 'VAS'];

  // Definition of logistic sectors
  logisticsSector: string[] = ['Fashion & Lifestlye', 'Food', 'Automotiv', 'Healthcare'];

  // Definition of internal projekt manager
  projectManager: projectManager[] = [
    {value: 'Hans Mueller', viewValue: 'Hans Mueller'},
    {value: 'Peter Hansen', viewValue: 'Peter Hansen'},
    {value: 'Julia Maier', viewValue: 'Julia Maier'},
  ]

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>,   private fb: FormBuilder) {}

  ngOnInit(): void {}

  async saveCustomer() {


    this.customer.logisticalTasks = this.selectedTasks;

    const payload = {
      ...this.customer,
      goLive: Timestamp.fromDate(this.customer.goLive),
    };

    await addDoc(collection(this.firestore, 'customers'), payload);
    this.dialogRef.close();
  }

  closeAddCustomerDialog() {
    this.dialogRef.close();
  }

}
