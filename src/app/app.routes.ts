import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'customer', component: CustomerComponent}
];
