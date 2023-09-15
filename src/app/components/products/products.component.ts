import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsList!: any[];
  categories:any[]=[];
  DisplayProductList!: any[];
  orgList!: any[];
  constructor(public service: ProductsService) { }

  ngOnInit(): void {
this.categories=[
  {id:1, name :"men's clothing" , checked:false},
  {id:2, name :"jewelery" , checked:false},
  {id:3, name :"electronics" , checked:false},
  {id:4, name :"women's clothing" , checked:false},
]

this.service.GetallCategories().subscribe(
  { 
    
    next: (res) => {
     // this.categories =JSON.parse(JSON.stringify(res));  
    console.log(this.categories)
    },
    error: (error) => {
      console.log(error);
    }
  })


    this.service.Getall().subscribe(
      { 
        
        next: (res) => {
        this.orgList =JSON.parse(JSON.stringify(res));  
        this.productsList =  this.orgList; 
        console.log(this.orgList)
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  addToCart(pro: any) {
    pro.inCart = true;
    if(pro.count == null)
    {
      pro.count =1;
    }
    //this.orderService.newMealsList.push(meal);
  }

  increment(pro: any) {
    pro.count++; 
   // let itemIndex = this.orderService.newMealsList.findIndex(item => item.id == meal.id);
   // this.orderService.newMealsList[itemIndex].count = meal.count;   
  }

  decrement(pro: any) {
    if (pro.count > 1) {
      pro.count--;
   //   let itemIndex = this.orderService.newMealsList.findIndex(item => item.id == meal.id);
    //  this.orderService.newMealsList[itemIndex].count = meal.count;  
    } else {
      pro.inCart = false;
     // this.orderService.newMealsList.splice(this.orderService.newMealsList.findIndex(x => x.id == meal.id), 1);
    }
  }

  OnChange(event: any) {
    debugger;
    this.DisplayProductList = [];
    for (var i = 0; i < this.selectedCategories.length; i++) {
      var lst = this.orgList.filter(x => x.category == this.selectedCategories[i].name);
      for (var j = 0; j < lst.length; j++) {
        this.DisplayProductList.push(lst[j]);
      }
    }

///////////////////////////////////////////////////////////

    //If no checkbox is selected assign original product list to display product list
    if (this.selectedCategories.length == 0 ) {
      this.DisplayProductList = this.orgList;
    }
  
////////////////////////////////////////////////////////

     this.productsList=  this.DisplayProductList;
  }

  get selectedCategories() {
    return this.categories.filter(opt => opt.checked)
  }


   filterPrice( min: number, max:number){
    debugger;
    this.productsList= this.orgList;
    this.productsList=this.productsList.filter(item => item.price >= min && item.price <= max);
  }

}
