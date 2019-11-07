import { UserModel } from '../models/user.model';

const NAMESTORAGE = 'shop.data';

export class SecurityUtil {
    public static set(user: UserModel) {
        const data = JSON.stringify(user);
        localStorage.setItem(NAMESTORAGE, btoa(data));
    }

    public static get(): UserModel {
        const data = localStorage.getItem(NAMESTORAGE);
        if (data) {
            return JSON.parse(atob(data));
        } else {
            return null;
        }
    }

    public static hasToken(): boolean {
        const user = this.get();

        if (user && user.token) {
            return true;
        } else {
            return false;
        }
    }

    public static isInRole(role: string) : boolean {
        const user = this.get();
        
        if(!user){
            return false;
        }

        if(!user.roles || user.roles.length == 0){
            return false;
        }

        return user.roles.includes(role);
    }

    public static clear() {
        localStorage.removeItem(NAMESTORAGE);
    }
}