import {Component, Input} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import Hero from '../hero';
import {HeroService} from '../hero.service';

@Component({
    selector: 'my-hero-detail',
    template: require('./synax.html')
})
export class HeroDetailComponent implements OnInit{      //告诉这个类，我们要实现onInit这个接口
    constructor(route: ActivatedRoute, heroService: HeroService) {
        this.route = route;
        this.heroService = heroService;
    }

    //使用装饰器语法来获得父组件传值给子组件
    @Input() hero: Hero;

    showMsg() {
        
    }

    ngOnInit() {
        this.route.params.forEach((params) => {
            let id = +params['id'];
            console.log(id);
            this.hero = this.heroService.getHero(id);
        })
    }

    goBack() {
        window.history.back();
    }
}

