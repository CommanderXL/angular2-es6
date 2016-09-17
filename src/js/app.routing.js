import {ModuleWithProviders} from '@angular/core';
import {RoutesConfig, RouterModule} from '@angular/router';

//导入HeroesComponent组件
import {HeroesComponent} from './heroes.component';
//导入DashboardCompoennt
import {DashboardComponent} from './dashboard.component';
//导入HeroDetailComponent
import {HeroDetailComponent} from './components/synax/synax.component';

//outlet路由插座

const appRoutes = [
    {
        path: ' ',
        redirectTo: '/dashboard',
        pathMath: 'full'
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];

//调用 forRoot 方法是因为要在应用程序根部提供配置好的路由。 forRoot 方法为我们提供了路由需要的服务提供商和指令
export const routing = RouterModule.forRoot(appRoutes, {useHash: true});