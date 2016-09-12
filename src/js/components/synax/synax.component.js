import {Component, Input} from '@angular/core';

@Component({
    selector: 'click-c',
    template: require('./synax.html')
})
export default class SynaxComponent {

    showMsg() {
        console.log(this.msg);
    }

    @Input()
    hero: Hero;
}

class Hero {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}