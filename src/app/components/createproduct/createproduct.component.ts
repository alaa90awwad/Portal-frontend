import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,public service: ProductsService) { }
  product:any=[];
  isEdit:boolean=false;
  ngOnInit(): void {
    this.route.params.subscribe( params => this.getProductData(params["id"]));
  }

  getProductData(id:number)
  {
    debugger
    if(id != null)
    {   
      this.isEdit = true;
    this.service.GetById(id).subscribe(
      {       
       next: (res) => {
        this.product = JSON.parse(JSON.stringify(res));
        console.log( this.product)
        },
        error: (error) => {
        }
      })
    }
  }

  addProduct(product:any)
  {
    debugger;
    this.service.addProduct(this.product).subscribe(
      { 
        
        next: (res) => {
          this.router.navigate(['/manageproducts']);
        },
        error: (error) => {
          console.log(error);
        }
      })
  }
  editProduct(product:any)
  {
    debugger;
    this.service.editProduct(this.product).subscribe(
      { 
        
        next: (res) => {
          this.router.navigate(['/manageproducts']);
        },
        error: (error) => {
          console.log(error);
        }
      })
  }
  cancel()
  {
    this.router.navigate(['/manageproducts']);
  }

}
