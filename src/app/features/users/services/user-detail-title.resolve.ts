import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { map, Observable } from "rxjs";
import { User } from "../models/user.model";
import { UserService } from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class UserDetailTitleResolve implements Resolve<string>{
  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string | Observable<string> | Promise<string> {
    const userId = route.paramMap.get('id');

    if (userId) {
      return this.userService.getUserById(userId)
        .toPromise()
        .then(user => {
          return `User detail ${user?.name}`;
        })
    }

    return `User detail`
  }

}
