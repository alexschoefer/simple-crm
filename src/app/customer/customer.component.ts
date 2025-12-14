import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-customer.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatCardModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {

  allCustomers = [];

  constructor(public dialog: MatDialog) {
    
  }

  ngOnInit(): void {
    
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

}
