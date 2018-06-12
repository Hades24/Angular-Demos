import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  course ='Angular 5';
  counter:number=0;
  show:boolean=false;
  obj={color:"white",'background-color':"teal"};
  s:string="It is even number"
  isBordered: boolean = true;
  sortoption: string = "";
  productsList = [
    { productName: "Samsung J7", price: 18000 },
    { productName: "Apple iPhone 6S", price: 60000 },
    { productName: "Lenovo K5 Note", price: 10000 },
    { productName: "Nokia 6", price: 15000 },
    { productName: "Vivo V5 Plus", price: 26000 }
  ];
  fun(){
    this.counter++;
    if(this.counter%2==0){
        this.show=true;
    }
    else{
      this.show=false;
    }
  }

  
}
