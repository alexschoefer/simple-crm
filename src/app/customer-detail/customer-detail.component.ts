import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatMenuModule],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.scss'
})
export class CustomerDetailComponent implements OnInit {

  customer$!: Observable<any>;
  firestore = inject(Firestore);

  constructor(private route: ActivatedRoute) {}

  //wird aufgerufen, wenn Componente initalisiert wird
  ngOnInit(): void {
    //holt die aktuelle ID aus der URL Route
    const id = this.route.snapshot.paramMap.get('id')!;
    //sucht genau die Daten, wo die ID passt
    const customerRef = doc(this.firestore, 'customers', id);
    //holt die Daten als Observerable (docData = liest das Dokument, liefert ein Observerable, gibt nur den Inhalt zurück)
    this.customer$ = docData(customerRef, { idField: 'id' });
  }

  openEditAdressDialog() {

  }
}
