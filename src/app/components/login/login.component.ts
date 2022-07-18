import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form! : FormGroup;
  isLoggedIn: boolean = false;
  isLoginFailed: boolean = false;
  errorMessage!: any;
  successMessage!: any;

  constructor(private token : TokenStorageService, private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username : new FormControl(''),
      password : new FormControl(''),
    })
    if (this.token.getToken()){
      this.isLoggedIn = true;
      this.form.disable()
      this.successMessage = 'You are currently Logged in.'
    }

    console.log(this.isLoggedIn)
  }

  get f(){
    return this.form.controls
  }

  handleError(error: any){
    this.isLoginFailed = true;
    console.log(error.error[Object.keys(error.error)[0]])
    return throwError(error)
  }

  onSubmit(){

    this.authService.loginUser(this.f['username'].value, this.f['password'].value).subscribe({
      next: (data) => {
        this.token.saveToken(data.access);
        this.token.saveUser(data)
        console.log(data.access)
      },
      error: (e) => {
        this.errorMessage = e.error[Object.keys(e.error)[0]];
        this.isLoginFailed = false
      },
      complete: () => {
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.errorMessage = null
        location.reload()
      }
    })
    
  }

}
