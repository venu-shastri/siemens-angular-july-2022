import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root' // provider 
})
export class AccountsService {

  constructor(private httpClientRef:HttpClient,@Inject('httpApiBaseAddress')private httpBaseAddress:string) { }

    validateUser(userObj:any):Observable<any>{

      //http Request 
      return this.httpClientRef.post(`${this.httpBaseAddress}/accounts/validate`,userObj);



    }

   
}
