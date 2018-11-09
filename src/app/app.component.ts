
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    
    <input type="text" id="inputName" class="form-control" autofocus />
    <br />
    <button (click)="getName()" type="submit" class="btn btn-primary">submit</button>
    <ul class="display-4 mt-4 list-unstyled">
      <li id="idName" style="color:#000;">{{ vResult }}</li>
    </ul>
    <div class="alert {{vErrorTemplate}}" role="alert">
      {{vError}}
    </div>
    
  `
})


export class AppComponent {

  vResult           =   "";
  vColor            =   "";
  vError            =   "";
  vErrorTemplate    =   "";
  
  

  public getName(){
    
    this.vResult = "";
    document.getElementById("idName").style.color = "";
    let colorName;  
    let vform   = (<HTMLInputElement>document.getElementById("inputName")).value;    
    //this.vResult = (<HTMLInputElement>document.getElementById("inputName")).value;
    const objForm = Array.from(vform);
    
    for(let i = 0;i < vform.length;i++){

      const output = Object.values(objForm[i]);
      output["color"] = (objForm[i].charCodeAt(0) +","+ Math.random()*255 +","+ Math.random()*255 +"");
      
      this.vResult += output;
      
      document.getElementById("idName").style.color = " rgb(" + output["color"] + ") ";
      
    }
    

    if(vform != ""){
      if(vform.length <= 2 && vform.length != 0){
        this.vErrorTemplate = "alert-danger";
        this.vError = "Choose a name with at least 3 characters ";
        this.vResult = "";
      }else{
        this.vErrorTemplate = "alert-success";
        this.vError = "Enjoy you colourful name :)";
        return vform;
      }
    }else{
      this.vErrorTemplate = "alert-danger";
      this.vError = "The form is empty";
    };

  }


}

