import {Component} from 'angular2/core';
import {UsersService} from './users.service';

@Component({
    selector: 'users',
    templateUrl: 'app/users/users.component.html',
    providers: [UsersService]
})
export class UsersComponent implements OnInit {
    users: any[];

    constructor(private _userService: UsersService){}

    ngOnInit() {
        this._userService.getUsers()
            .subscribe(users => {
                this.users = users;
        })
    }
}