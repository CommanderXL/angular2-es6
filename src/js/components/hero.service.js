import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';

/*
定义本服务的元数据
*/
@Injectable()
export class HeroService {
    getHeroes() {
        return HEROES;
    }
    getHero(id) {
        let heroes = this.getHeroes();
        return heroes.find((hero) => {
            return hero.id === id;
        });
    }
}