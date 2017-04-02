import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup} from 'angular2/common';

@Component({
    templateUrl: 'app/users/user-form.component.html'
})
export class UserFormComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            name: [],
            email: [],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }
}