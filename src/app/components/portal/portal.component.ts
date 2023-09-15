import { Location ,PopStateEvent} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(public location: Location, private router: Router) { }

  ngOnInit(){
    document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');

    const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
    const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');

    this.location.subscribe((ev:PopStateEvent) => {
      this.lastPoppedUrl = ev.url!;
  });
   this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationStart) {
         if (event.url != this.lastPoppedUrl)
             this.yScrollStack.push(window.scrollY);
     } else if (event instanceof NavigationEnd) {
         if (event.url == this.lastPoppedUrl) {
             this.lastPoppedUrl = undefined || '';
             window.scrollTo(0, this.yScrollStack.pop()!);
         } else
             window.scrollTo(0, 0);
     }
  });

  this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
    elemMainPanel.scrollTop = 0;
    elemSidebar.scrollTop = 0;
});

  }

}
