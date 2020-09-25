import { ClassComponent } from './modules/class/class.component';
import { StudentsComponent } from './modules/students/students.component';
import { AssignmentsComponent } from './modules/assignments/assignments.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        redirectTo: 'class',
        pathMatch: 'full'
      },
      {
        path: 'student/:id',
        // path: 'student',
        component: StudentsComponent
      },
      {
        path: 'assignment',
        component: AssignmentsComponent
      },
      {
        path: 'class',
        component: ClassComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
