import {Component, Input} from '@angular/core';
import Hero from '../hero';

@Component({
    selector: 'click-c',
    template: require('./synax.html')
})
class SynaxComponent {

    //使用装饰器语法来获得父组件传值给子组件
    @Input() hero: Hero;

    showMsg() {
        console.log(this.msg);
    }
}

export default SynaxComponent;

