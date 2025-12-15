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
    MatSelectModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-add-customer.component.html',
  styleUrls: ['./dialog-add-customer.component.scss'] 
})
export class DialogAddUserComponent implements OnInit {

  customer = new Customer();
  goLive!: Date;
  firestore = inject(Firestore);

  // Definition of logistical tasks
  logisticalTasks: string[] = ['Inbound', 'Storage', 'Outbound', 'Returns', 'VAS'];

  // Definition of logistic sectors
  logisticsSector: string[] = ['Fashion & Lifestlye', 'Food', 'Automotiv', 'Healthcare'];

  // Definition of internal projekt manager
  projectManager: projectManager[] = [
    {value: 'HM', viewValue: 'Hans Mueller'},
    {value: 'PH', viewValue: 'Peter Hansen'},
    {value: 'JM', viewValue: 'Julia Maier'},
  ]



  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  ngOnInit(): void {}

  async saveCustomer() {
    const payload = {
      ...this.customer,
      goLive: Timestamp.fromDate(this.customer.goLive)
    };

    await addDoc(collection(this.firestore, 'customers'), payload);
    this.dialogRef.close();
  }

  closeAddCustomerDialog() {
    this.dialogRef.close();
  }

}
