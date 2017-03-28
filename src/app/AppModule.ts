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
import { NgGridModule } from "angular2-grid";

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    MaterialModule.forRoot(),
    ToasterModule,
    NgGridModule 
  ],
  declarations: [AppComponent,
    Modules.RegistrationComponent,
    Modules.LoginComponent,
    Modules.ForgetPasswordComponent,
    Modules.LandingScreenComponent,
    Modules.HomeComponent,
    // Modules.DialogComponent,
    // Modules.DialogAnchorDirective
  ],
  entryComponents : [],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})

export class AppModule { }