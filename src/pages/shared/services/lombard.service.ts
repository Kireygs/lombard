import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lombard } from '../models/lombard.model';


@Injectable()
export class LombardService {
    
    selected: Lombard = new Lombard();
    

    constructor(private http: HttpClient) { }
    getLombards() {
        let url = 'http://188.225.25.159:7953/api/lombards';
        return this.http.get<Lombard>(url);
    }

}