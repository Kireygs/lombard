import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../models/request.model';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RequestService {
    
    selected: Request = new Request();
    private host: string = 'http://188.225.25.159:7953/api/requests';
    

    constructor(private http: HttpClient,
        public http1: Http) { }
    getRequests() {
        let url = 'http://188.225.25.159:7953/api/requests';
        return this.http.get<Request>(url);
    }

    getRequestByStatus(type){
        let filter = {"where":{"status":type}};
        let url = 'http://188.225.25.159:7953/api/requests?filter='+JSON.stringify(filter);
        return this.http.get<Request>(url);
    }

    deletRequest(id: string){
        let url = 'http://188.225.25.159:7953/api/requests/'+id;
        this.http.delete(url).subscribe(
            resp => console.log('deleted'),
            error => console.log('error occur, delete fail')
        );
    }



    private catchError(error: Response | any) {
        console.log(error);
        return Observable.throw(error.json.error || "Server error.");
    }

    private logResponse(res: Response) {
        console.log();
    }

    private extractData(res: Response) {
        return res.json();
    }


    addRequest(report: Request) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
    
        return this.http1.post(this.host, JSON.stringify(report), { headers: headers })
        .do(this.logResponse)
        .map(this.extractData)
        .catch(this.catchError);
    }
}