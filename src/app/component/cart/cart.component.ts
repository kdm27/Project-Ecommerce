import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  // public product :any=[]
  public grandTotal:any
  public products : any = [];
  // public grandTotal !: number;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getproducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item)
  }
  emptycart(){
    this.cartService.removeAllCart()
  }
}


