//添加路由
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from './components/hero';
import {HeroService} from './components/hero.service';

@Component({
    selector: 'my-dashboard',
    template: require('./dashboard.component.html')
})
export class DashboardComponent implements OnInit{  //告诉这个类，要实现OnInit接口
    constructor(heroService: HeroService, route: Router) {
        this.heroService = heroService;
        this.route = route; 
        this.gotoDetail = hero => {
            let link = ['/detail', hero.id];    //生成路由的链接参数数组
            this.route.navigate(link);          //将这个参数数组传给路由器的navigate方法
        }
        this.heroes = [];
    }
    ngOnInit() {
        this.heroes = this.heroService.getHeroes().slice(1, 5);
    }
}