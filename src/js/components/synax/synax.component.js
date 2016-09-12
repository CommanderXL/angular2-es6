import {Component, Input} from '@angular/core';
import Hero from '../hero';

@Component({
    selector: 'click-c',
    //inputs: ['hero'],   //没有使用@input装饰器的语法
    template: require('./synax.html')
})
class SynaxComponent {

    @Input() hero: Hero;

    showMsg() {
        console.log(this.msg);
    }
}

export default SynaxComponent;

