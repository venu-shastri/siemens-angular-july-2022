import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountsService } from '../../services/accounts-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
constructor(private accountsServiceRef:AccountsService,private router:Router){


}
  userName:string="";
  password:string="";
  

  ngOnInit(): void {
  }

  onLogin(formGroupRef:FormGroup){
    console.log(formGroupRef);
    if(!formGroupRef.invalid){
      let userObj={userName:this.userName,password:this.password};
      this.accountsServiceRef.validateUser(userObj).subscribe(
        (data:any)=>{
          if(data.message=="Valid Credentials"){
            //redirect
            this.router.navigate(['maindashboard',this.userName]);
            console.log(data.message);

          }
          else{
            console.log("Invalid Cfesentials");
          }
        });
    }


  }
  clear(formGroupRef:FormGroup){
    formGroupRef.reset();
  }
}
