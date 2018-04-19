import { Component, OnInit } from '@angular/core';  
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';  
import { CrudService } from './crud.service';  
   
// import { Http,Response, Headers, RequestOptions } from '@angular/http';   
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent {  
    
  constructor(private crudService: CrudService) { }  
  users = "";
  valueButton = "Save";

  ngOnInit() {    
    this.init();
  }  
  onSave = function(user) {    
    user.mode = this.valueButton;
    if(user.mode == "Save"){
      this.crudService.saveUser(user)
        .subscribe(stored => { alert(stored.data); this.ngOnInit(); },
        error => this.errorMessage = error )
    } else {
      this.crudService.updateUser(user)
        .subscribe(stored => { alert(stored.data); this.ngOnInit(); },
        error => this.errorMessage = error )
    }    
  }      
  edit = function(user) {  
    this.id = user._id;  
    this.name = user.name;  
    this.city = user.city;  
    this.valueButton = "Update";  
  } 
  delete = function(id) {  
    this.crudService.deleteUser(id)  
      .subscribe(stored => { alert(stored.data); this.ngOnInit(); }, 
      error => this.errorMessage = error )
  }
  init = function(){
    this.crudService.getUsers().subscribe(data => this.users = data);
    this.clearFields();
    this.valueButton = "Save";
  }
  clearFields = function(){
    this.id = null;
    this.name = null;
    this.city = null;
  }
}  