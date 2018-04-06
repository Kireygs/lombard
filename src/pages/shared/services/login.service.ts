import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login.model';

@Injectable()
export class LoginService {
    
    

    constructor(private http: HttpClient) { }

    

    loginByUsernameAndPassword(data: Object = null) {
        let url = 'http://188.225.25.159:7953/api/users?filter='+JSON.stringify(data);
        return this.http.get<Login>(url);
    }

}