import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditAdressInformationDialogComponent } from '../edit-adress-information-dialog/edit-adress-information-dialog.component';
import { EditInternalInformationDialogComponent } from '../edit-internal-information-dialog/edit-internal-information-dialog.component';
import { Customer } from '../../models/customer.class';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatMenuModule, MatDialogModule],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.scss'
})
export class CustomerDetailComponent implements OnInit {

  customer$!: Observable<any>;
  firestore = inject(Firestore);

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {}

  //wird aufgerufen, wenn Componente initalisiert wird
  ngOnInit(): void {
    //holt die aktuelle ID aus der URL Route
    const id = this.route.snapshot.paramMap.get('id')!;
    //sucht genau die Daten, wo die ID passt
    const customerRef = doc(this.firestore, 'customers', id);
    //holt die Daten als Observerable (docData = liest das Dokument, liefert ein Observerable, gibt nur den Inhalt zurück)
    this.customer$ = docData(customerRef, { idField: 'id' });
  }

  async openEditAdressDialog() {
    const customerRef = doc(this.firestore, 'customers', this.route.snapshot.paramMap.get('id')!);
    const customerData = await firstValueFrom(docData(customerRef));
    this.dialog.open(EditAdressInformationDialogComponent, {
      data: customerData
    });
  }

    openEditInternalInformationDialog() {
      this.dialog.open(EditInternalInformationDialogComponent);
    }
}
