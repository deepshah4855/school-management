import { UserPermission } from './../models/userRole.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  userPermissionClass = new UserPermission();
  userPermission = this.userPermissionClass.userPermission;

  constructor() { }

  userRoleSet(userRoleArray) {
    console.log(userRoleArray);
    console.log(this.userPermission);

    userRoleArray.map(permission => {
      switch(permission.name) {
        case 'role-list': {
          this.userPermission.roleList = true;
          break;
        }
        case 'role-create': {
          this.userPermission.roleCreate = true;
          break;
        }
        case 'role-edit': {
          this.userPermission.roleEdit = true;
          break;
        }
        case 'role-delete': {
          this.userPermission.roleDelete = true;
          break;
        }
        // case 'school-list': {
        //   this.userPermission.schoolList = true;
        //   break;
        // }
        case 'school-create': {
          this.userPermission.schoolCreate = true;
          break;
        }
        case 'school-edit': {
          this.userPermission.schoolEdit = true;
          break;
        }
        case 'school-delete': {
          this.userPermission.schoolDelete = true;
          break;
        }
        case 'permission-list': {
          this.userPermission.permissionList = true;
          break;
        }
        case 'permission-create': {
          this.userPermission.permissionCreate = true;
          break;
        }
        case 'permission-edit': {
          this.userPermission.permissionEdit = true;
          break;
        }
        case 'permission-delete': {
          this.userPermission.permissionDelete = true;
          break;
        }
        case 'standard-list': {
          this.userPermission.standardList = true;
          break;
        }
        case 'standard-create': {
          this.userPermission.standardCreate = true;
          break;
        }
        case 'standard-edit': {
          this.userPermission.standardEdit = true;
          break;
        }
        case 'standard-delete': {
          this.userPermission.standardDelete = true;
          break;
        }
        case 'subject-list': {
          this.userPermission.subjectList = true;
          break;
        }
        case 'subject-create': {
          this.userPermission.subjectCreate = true;
          break;
        }
        case 'subject-edit': {
          this.userPermission.subjectEdit = true;
          break;
        }
        case 'subject-delete': {
          this.userPermission.subjectDelete = true;
          break;
        }
        case 'user-list': {
          this.userPermission.userList = true;
          break;
        }
        case 'user-create': {
          this.userPermission.userCreate = true;
          break;
        }
        case 'user-edit': {
          this.userPermission.userEdit = true;
          break;
        }
        case 'user-delete': {
          this.userPermission.userDelete = true;
          break;
        }
        default: {
          break;
        }
      }
    })
    localStorage.setItem('userPermission', JSON.stringify(this.userPermission));
  }
}
