import { Injectable } from '@angular/core';   
import { Http, Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
  
@Injectable()  
export class CrudService {
  
  constructor(private _http: Http) { }  
  
  saveUser(user){      
    return this._http.post('http://localhost:8080/api/saveUser/', user)  
      .map((response: Response) => response.json())              
  }
  updateUser(user){      
    return this._http.post('http://localhost:8080/api/updateUser/', user)  
      .map((response: Response) => response.json())              
  }
  deleteUser(id){   
    return this._http.post('http://localhost:8080/api/deleteUser/',{'id': id})  
      .map((response: Response) => response.json())               
  }  
  getUsers(){       
    return this._http.get('http://localhost:8080/api/getUsers/')  
      .map((response: Response) => response.json())              
  }
}  