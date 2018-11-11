
import { Component } from '@angular/core';
import { getClosureSafeProperty } from '@angular/core/src/util/property';


@Component({
  selector: 'app-root',
  template: `
    
    
    <input type="text" [(ngModel)]="vName" (keyup.enter)="onKeyUp()" class="form-control" />
    <br />
    <button (click)="getName()" type="submit" class="btn btn-primary">submit</button>
    <ul class="list-unstyled mt-2">
      <li *ngFor="let names of objForm" class="list-inline-item" [style.color]="output"><p class="h1">{{names | uppercase}}</p></li>
    </ul>
    <div class="alert {{vErrorTemplate}}" role="alert">
      {{vError}}
    </div>
    
  `
})

export class AppComponent {

  vName:any;
  objForm;
  output;
  vColor:any;
  vError;
  vErrorTemplate;
  cu;
  
  onKeyUp(){this.getName();};
  
  getName(){
    
    if(this.vName != undefined){
      
      this.objForm = new Object (this.vName);
      
      //console.log(this.objForm);
      //console.log(this.vColor);
      
      for(let i = 0;i < this.objForm.length;i++){
        
        this.vColor = new Object(this.objForm[i]);
        this.vColor["code"] = (this.objForm[i].charCodeAt(0) +","+ Math.round(Math.random()*100) +","+ Math.round(Math.random()*100) +"");
        this.vColor["colorRGB"] = 'rgb('+ this.vColor["code"] + ')';
        
        this.output = this.vColor["colorRGB"]; 
        
        //console.log(this.output); 
        
      }
      
      if(this.vName.length <= 2 && this.vName.length != 0){
        this.vErrorTemplate = "alert-danger";
        this.vError = "Choose a name with at least 3 characters ";
      }else{
        this.vErrorTemplate = "alert-success";
        this.vError = "Enjoy you colourful name :)";
        return this.vName;
      }
    }else{
      this.vErrorTemplate = "alert-danger";
      this.vError = "The form is empty";
    };
   
  }

}

