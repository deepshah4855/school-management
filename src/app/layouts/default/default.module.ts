import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../material.module';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentsComponent } from '../../modules/assignments/assignments.component';
import { StudentsComponent } from '../../modules/students/students.component';
import { ClassComponent } from '../../modules/class/class.component';
import { DragScrollModule } from 'ngx-drag-scroll';

@NgModule({
  declarations: [
    DefaultComponent,
    AssignmentsComponent,
    StudentsComponent,
    ClassComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    DragScrollModule
  ]
})
export class DefaultModule { }
