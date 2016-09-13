/**
 * Created by XRene on 16/9/11.
 */
import { Component, OnInit } from '@angular/core';
import Hero from './components/hero';
import {HeroService} from './components/hero.service';  //导入heroservice服务

@Component({
    selector: 'my-heroes',
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
export class HeroesComponent implements OnInit{

    constructor(heroService: HeroService) {
        this.username = 'dreamapple';
        this.age = 22;
        this.fruit = 'apple';
        this.heroService = heroService;
        this.fruitsList = this.heroService.getHeroes(); //也可以使用在声明组件的ngOnInit阶段
    }

    

    showFruit(fruit = {name: 'nothing to show', id: 0}) {
        this.selectedHero = new Hero(fruit.id, fruit.name);
        console.log(this.selectedHero);
    }

    getHeroes() {
        this.fruitsList = this.heroService.getHeroes();
    }

    ngOnInit() {
        console.log(this.heroService);
        //this.getHeroes();
    }
}


