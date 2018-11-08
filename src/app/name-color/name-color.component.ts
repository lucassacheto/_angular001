import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'formInputName',
  templateUrl: './name-color.component.html',
  styleUrls: ['./name-color.component.css'],
  template: `
    
    <input type="text" id="inputName" class="form-control" autofocus />
    <br />
    <button (click)="getName()" type="submit" class="btn btn-primary">submit</button>
    <p class="display-4 mt-4">{{vResult}}</p>
    <div class="alert {{vErrorTemplate}}" role="alert">
      {{vError}}
    </div>
  `
})


export class NameColorComponent {

  vResult           =   "";
  vError            =   "";
  vErrorTemplate    =   "";

  getName(){
    
    var vform = (<HTMLInputElement>document.getElementById("inputName")).value;    
    //this.vResult = (<HTMLInputElement>document.getElementById("inputName")).value;
    
    
    let output  = "";
    //console.log(objForm);

    for(let i = 0;i < vform.length;i++){
      //console.log(objForm[i]);
      output += objForm[i];
    }
    
    console.log(objForm);


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
