import { Component, OnInit, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { MdDialog, MdDialogConfig, MdDialogRef, MdDialogClose, MdDialogActions, MdDialogContent, MdSnackBarModule } from '@angular/material';

import { IUsers } from '../../../DTO';
import { RegistrationComponent } from '../RegistrationComponent/RegistrationComponent';
import { AuthService, DialogServices } from '../../../Services';
import { matchPasswords, emailValidator, charOnly, alphaNumeric, passwordMatch } from '../../../Validator/Validation';

@Component({
    moduleId: module.id,
    templateUrl: './Template/ForgetPassword.html'
})

export class ForgetPasswordComponent {
    
    public userFormGroup: FormGroup;
    public auth: AuthService;
    public events: any[] = [];
    message: string;
    dialogRef: MdDialogRef<any>;

    constructor(private fg: FormBuilder,
        public authService: AuthService,
        public router: Router,
        public diaRef: MdDialogRef<any>,
        private dialogService: DialogServices ) {
        this.auth = authService;
        this.dialogRef = diaRef;
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
        });
    }

    ngOnInit() {
        this.userFormGroup = this.fg.group({
            UserName: ['']
        });
    }
}