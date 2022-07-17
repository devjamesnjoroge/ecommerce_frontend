import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { throwError } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form! : FormGroup;
  alert! : string;

  isLoggedIn = false;

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      confirm_password: new FormControl(''),
    })
  }

  get f(){
    return this.form.controls
  }

  handleError(error: any) {
    this.alert = error.error[Object.keys(error.error)[0]];
    return throwError(error);
  }

  onSubmit(){
    const email = this.f['email'].value;
    const username = this.f['username'].value;
    const password = this.f['password'].value;

    this.authService.registerUsers(email, username, password).pipe(
      this.handleError
      ).subscribe(
        data =>{
          console.log(data)
        }
        )
  }

}
