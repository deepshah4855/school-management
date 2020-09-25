import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  children?: any[];
  allowed: boolean;
}

// export const ROUTES: RouteInfo[] = [
//   { path: '/schools', title: 'Schools',  icon: 'outlined_flags', class: '', allowed : false },
//   { path: '/teachers', title: 'Teachers',  icon: 'record_voice_over', class: '', allowed : false },
//   { path: '/students', title: 'Students',  icon: 'school', class: '', allowed : false },
//   { path: '/classes', title: 'Class list / Subject',  icon: 'subject', class: '', allowed : false },
//   { path: '/ar-module', title: 'AR Module',  icon: 'device_hub', class: '',
//       children: [
//         {path: '/module1', title: 'Module 1',  icon: 'layers', class: '', allowed : false },
//         {path: '/module2', title: 'Module 2',  icon: 'layers', class: '', allowed : false },
//       ]
//   },
//   { path: '/questions', title: 'questions',  icon: 'help_outline', class: '' }
// ]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  //menuItems: any[];
  userPermission:any;
  menuItems: any[];
  constructor() { }

  ngOnInit(): void {
    //this.menuItems = ROUTES.filter(menuItem => menuItem);
    // this.userPermission = localStorage.getItem('userPermission');
    // this.userPermission = JSON.parse(this.userPermission);

   this. menuItems= [
      { path: '/class', title: 'Class',  icon: 'groups', class: '', allowed : true },
      { path: '/student', title: 'Student',  icon: 'face', class: '', allowed : true },
      // { path: '/schools', title: 'Schools',  icon: 'outlined_flags', class: '', allowed : true },
      { path: '/assignment', title: 'Assignment',  icon: 'description', class: '', allowed : true },
      // { path: '/ar-module', title: 'Class list',  icon: 'groups', class: '', allowed : true,
      //     children: [
      //       {path: '/module1', title: 'Class 1',  icon: 'group', class: ''},
      //       {path: '/module2', title: 'Class 2',  icon: 'group', class: ''},
      //       {path: '/module3', title: 'Class 3',  icon: 'group', class: ''},
      //       {path: '/module3', title: 'Class 4',  icon: 'group', class: ''},
      //       {path: '/module5', title: 'Class 5',  icon: 'group', class: ''},
      //       {path: '/module6', title: 'Class 6',  icon: 'group', class: ''},
      //     ]
      // },
      { path: '/questions', title: 'questions',  icon: 'help_outline', class: '' }
    ]
  }

}
