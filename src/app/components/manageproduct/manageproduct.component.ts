import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.css']
})
export class ManageproductComponent implements OnInit {
  productsList!: any[];
  p: number = 1;
  constructor(public service: ProductsService) { }

  ngOnInit(): void {
        this.service.Getall().subscribe(
          { 
            
            next: (res) => {
            this.productsList =JSON.parse(JSON.stringify(res));  
            console.log(this.productsList)
            },
            error: (error) => {
              console.log(error);
            }
          })
      }

      delete(id:number)
      {

        if(confirm("Are you sure to delete this product? ")) {
          this.service.deleteProduct(id).subscribe(
            { 
              
              next: (res) => {
             
              },
              error: (error) => {
                console.log(error);
              }
            })
        }
       
      }

}
