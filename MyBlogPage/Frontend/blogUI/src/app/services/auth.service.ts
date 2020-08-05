import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable, observable } from 'rxjs';
import { RegisterUser } from '../components/register/registerUser';
import { LoginUser} from '../components/login/loginUser'



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private htpp:HttpClient) { }
  path = environment.path;
  TOKEN_KEY = "token"

  register(registerUser:RegisterUser):Observable<RegisterUser[]>{
    let headers = new HttpHeaders()
    headers=headers.append("Content-type","application/json")
    return this.htpp.post<RegisterUser[]>(this.path+'/user/register',registerUser,{headers:headers})
  }

  login(loginUser:LoginUser):Observable<LoginUser[]>{
    let headers = new HttpHeaders()
    headers=headers.append("Content-type","application/json")
    return this.htpp.post<RegisterUser[]>(this.path+'/user/login',loginUser,{headers:headers})
  }

  saveToken(token){
    localStorage.setItem(this.TOKEN_KEY,token)
  }

  logOut(){
    localStorage.removeItem(this.TOKEN_KEY)
  }

  get isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY)
  }

  get token(){
    return localStorage.getItem(this.TOKEN_KEY)
  }
}
