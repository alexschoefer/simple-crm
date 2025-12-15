import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-customer/dialog-add-customer.component';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collectionData, collection, doc, onSnapshot, addDoc, updateDoc, deleteDoc, orderBy, limit, query, Timestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatCardModule, CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {

  //Observable, kein normaler Wert, muss abonniert werden (subscribe)
  customers$!: Observable<any[]>;

  firestore = inject(Firestore);

  constructor(public dialog: MatDialog) {
    
  }

  ngOnInit(): void {
    const customersRef = collection(this.firestore, 'customers');
    this.customers$ = collectionData(customersRef, { idField: 'id' });
  }
  
  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

}
