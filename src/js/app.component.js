import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <router-outlet></router-outlet>
    `,
    styles: [
        `
         .active {
             color: #039be5;
         }
        `
    ]
})
export class AppComponent {
    title = 'Tour of Heroes';
    
}