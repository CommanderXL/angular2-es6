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
}