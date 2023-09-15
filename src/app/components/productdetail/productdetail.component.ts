import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  pro:any;
  constructor(private route: ActivatedRoute,public service: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => this.getProductData(params["id"]));
  }


  getProductData(id:number)
{
  this.service.GetById(id).subscribe(
    {       
     next: (res) => {
      this.pro = JSON.parse(JSON.stringify(res));
      console.log( this.pro)
      },
      error: (error) => {

      }
    })
}

}
