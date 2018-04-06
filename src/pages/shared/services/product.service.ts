import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/product.model';


@Injectable()
export class ProductService {
    
    selected: Products = new Products();
    

    constructor(private http: HttpClient) { }
    getProducts() {
        let url = 'http://188.225.25.159:7953/api/products';
        return this.http.get<Products>(url);
    }

}