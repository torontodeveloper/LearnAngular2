import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'Rxjs';

@Injectable()
export class UserService {
    constructor(private http:Http){

    }
    get(){
        return this.http.get('https://randomuser.me/api/?inc=gender,name,nat&results=10').map((res:Response)=>res.json().results);
  
    }

    
}