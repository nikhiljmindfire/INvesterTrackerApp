import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, OverlayContainer } from '@angular/material';
import { Ng2BootstrapModule,ButtonsModule } from '../../node_modules/ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './AppComponent';
import { routing } from './AppRoutes';
import * as Modules from './Modules';
import { DialogServices } from './Services/DialogServices/DialogServices';
import { ToasterService, ToasterModule } from "angular2-toaster/angular2-toaster";
import { InputTextModule,DataTableModule,ButtonModule,DialogModule } from 'primeng/primeng';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    MaterialModule.forRoot(),
    ToasterModule,
    InputTextModule,
    DataTableModule,
    ButtonModule,
    DialogModule
  ],
  declarations: [AppComponent,
    Modules.RegistrationComponent,
    Modules.LoginComponent,
    Modules.ForgetPasswordComponent,
    Modules.LandingScreenComponent,
    Modules.HomeComponent,
    Modules.GridComponent,
    // Modules.DialogComponent,
    // Modules.DialogAnchorDirective
  ],
  entryComponents : [],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})

export class AppModule { }