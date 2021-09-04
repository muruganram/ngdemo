import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hw';
  choise:any;
  selectedValue:any;
  scores:any;
  runs:any= [6,4,2,1];
// scores=[{score:"sixer",checked:false},{score:"four",checked:false},{score:"2 runs",checked:false},{score:"1 runs",checked:false}];
  products=[{product:"mobile",checked:false},{product:"watch",checked:false},{product:"ring",checked:false}]

  getproducts(event: any, prod: any){
   if(event.checked){
  //  alert("checked");
prod.checked=true;

   } 
   else{
    // alert("unchecked");
    prod.checked=false;
   }
   this.selectedValue=this.products.filter((selected:any)=> selected.checked === true);
console.log(JSON.stringify(this.products));
  }
getrun(selectedValue: number){
  this.scores=[];
  for (let i = 0; i <selectedValue; i++) {
   // alert(selectedValue);  
  
 switch (selectedValue) {
   case 6:
     this.scores.push('sixer')
     break;
     case 4:
      this.scores.push('four')
      break;
      case 2:
        this.scores.push('2 run')
        break;
       case 1:
        this.scores.push('1 run')
        break;
   default:
     this.scores.push(selectedValue+' run')
     break;
 }
}
}
}

