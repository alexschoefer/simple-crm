import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'customer', component: CustomerComponent},
    { path: 'customer/:id', component: CustomerDetailComponent},

];
