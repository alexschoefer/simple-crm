import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCL8ASK_YgL1DGI0tOnhngCU4xT5YvbVnk",
  authDomain: "crm-logistic-c8554.firebaseapp.com",
  projectId: "crm-logistic-c8554",
  storageBucket: "crm-logistic-c8554.firebasestorage.app",
  messagingSenderId: "617751150308",
  appId: "1:617751150308:web:da292aec1c42003e7976f1"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};
