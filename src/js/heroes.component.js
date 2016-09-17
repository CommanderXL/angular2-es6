/**
 * Created by XRene on 16/9/11.
 */
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Hero from './components/hero';
import {HeroService} from './components/hero.service';  //导入heroservice服务

@Component({
    selector: 'my-heroes',
    template: `
    <p>My name is {{username}}</p>
    <p>My age is {{age}}</p>        
    <p>My favorite fruit is {{fruit}}</p>
    <ul>
        <li class="list-item" *ngFor="let hero of heroesList" (click)="selectedHero = hero">{{hero.name}}</li>
    </ul>
    <div *ngIf="selectedHero">
        <h2>{{selectedHero.name | uppercase}} is my hero</h2>
        <button (click)="gotoDetail()">View Details</button>
    </div>
    `,
    styleUrls: ['/src/js/heroes.component.css'] //可以使用styles或者styleUrls2种导入css样式的写法
})
export class HeroesComponent implements OnInit{

    constructor(heroService: HeroService, route: Router) {
        this.username = 'dreamapple';
        this.age = 22;
        this.fruit = 'apple';
        this.heroService = heroService;
        this.route = route;
        this.heroesList = this.heroService.getHeroes(); //也可以使用在声明组件的ngOnInit阶段
    }
    showFruit(fruit = {name: 'nothing to show', id: 0}) {
        this.selectedHero = new Hero(fruit.id, fruit.name);
        console.log(this.selectedHero);
    }

    getHeroes() {
        this.heroesList = this.heroService.getHeroes();
    }
    gotoDetail() {
        this.route.navigate(['/detail', this.selectedHero.id]);
    }

    ngOnInit() {
        console.log(this.heroService);
        //this.getHeroes();
    }
}


