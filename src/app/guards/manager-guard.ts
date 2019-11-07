import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { SecurityUtil } from '../utils/security.util';

@Injectable()
export class ManagerGuard implements CanActivate {
    constructor(private router: Router){}

    canActivate() {
        return SecurityUtil.isInRole('manager');
    }
}