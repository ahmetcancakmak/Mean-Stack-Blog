import { Component, OnInit } from '@angular/core';
import { LoginUser } from './loginUser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }
  loginUser: any = {}
  ngOnInit() {
  }

  login(loginUser:LoginUser){
    this.authService.login(loginUser).subscribe(data=>{
      this.authService.saveToken(data.token)
    })
  }

}
