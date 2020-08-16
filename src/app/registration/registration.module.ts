import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserData } from './user-data';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    imports: [
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
        InMemoryWebApiModule.forRoot(UserData),
    ],
    declarations: [
        RegistrationComponent,
    ],
    exports: [
        RegistrationComponent
    ]
})

export class RegistrationModule { }