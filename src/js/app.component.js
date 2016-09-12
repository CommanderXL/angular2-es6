/**
 * Created by XRene on 16/9/11.
 */
import { Component } from '@angular/core';
import Hero from './components/hero';

@Component({
    selector: 'my-app',
    template: `
    <p>My name is {{username}}</p>
    <p>My age is {{age}}</p>        
    <p>My favorite fruit is {{fruit}}</p>
    <ul>
        <li class="list-item" *ngFor="let fruit of fruitsList" (click)="showFruit(fruit)">{{fruit.name}}</li>
    </ul>
    <click-c [hero]="selectedHero"></click-c>
    `,
    styles: [
        `
            .list-item {
                color: red;
            }
        `
    ]
})
export default class AppComponent {
    selectedHero: {};
    username = 'dreamapple';
    age = 22;
    fruit: 'apple';
    fruitsList = [
            {
                name: 'Apple',
                id: 1
            },
            {
                name: 'orange',
                id: 2
            },
            {
                name: 'glass',
                id: 3
            }
        ];

    showFruit(fruit = {name: 'nothing to show', id: 0}) {
        this.selectedHero = new Hero(fruit.id, fruit.name);
        console.log(this.selectedHero);
    }
}


