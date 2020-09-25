import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggleSideBarEvent: EventEmitter<any> = new EventEmitter();
  private userSubs: Subscription;
  userName: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // this.userSubs = this.authService.user.subscribe(user => {
    //   if(user) {
    //     this.userName = user.name;
    //   }
    // })
    this.userName = 'Janak Shah'
  }

  toggleSideBar = () => {
    this.toggleSideBarEvent.emit();
  }

  logOut = () => {
    this.authService.logout();
  } 

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
  }
}
