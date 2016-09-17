/**
 * Created by XRene on 16/9/11.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {httpModule} from '@angular/http';


import {HeroesComponent} from './heroes.component'; //HeroComponent组件
import {DashboardComponent} from './dashboard.component';
import {AppComponent} from './app.component';     //AppComponent组件
import {HeroDetailComponent} from './components/synax/synax.component';

//heroService服务
import {HeroService} from './components/hero.service';

//导入route路由配置. 它是一个module
import {routing} from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        httpModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    providers: [HeroService],           //全局环境下注入这个service
    bootstrap: [AppComponent]
})
export class AppModule {}
