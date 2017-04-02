import {Component} from 'angular2/core';
import {UsersService} from './users.service';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'users',
    templateUrl: 'app/users/users.component.html',
    providers: [UsersService],
    directives: [RouterLink]
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