import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';   
  
import { HttpModule } from '@angular/http';  
import { FormsModule } from '@angular/forms';  
  
import { AppComponent } from './app.component';  
  
import { CrudService } from './crud.service';  
  
@NgModule({  
  declarations: [  
    AppComponent  
  ],
  imports: [  
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [CrudService],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  