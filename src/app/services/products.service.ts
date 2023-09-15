import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  
  readonly baseURL = 'https://fakestoreapi.com/';
  constructor(private http:HttpClient,private router: Router) { }

  Getall()
  {
    return this.http.get(this.baseURL+"products");
  }
  GetallCategories()
  {
    return this.http.get(this.baseURL+"products/categories");
  }

  GetById(id:number)
  {
    return this.http.get(this.baseURL+"products/"+id);
  }


  addProduct(product:any)
  {
   return this.http.post(this.baseURL +"products",product);
  }
  editProduct(product:any)
  {
   return this.http.put(this.baseURL +"products/"+product.id,product);
  }
  deleteProduct(id:number)
  {
    return this.http.delete(this.baseURL +"products/"+id);
  }
}
