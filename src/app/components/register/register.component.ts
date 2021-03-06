import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form! : FormGroup;
  alert!: string;
  errorMessage!: any;
  isLoggedIn = false;
  successFul: boolean = false;

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      confirm_password: new FormControl(''),
    })
    if (this.successFul == true){
      this.form.disable()
    }
  }

  get f(){
    return this.form.controls
  }

  handleError(error: any) {
    console.log(error.error[Object.keys(error.error)[0]])
    return throwError(error);
  }

  onSubmit(){
    this.authService.registerUsers(this.f['email'].value,
    this.f['username'].value,
    this.f['password'].value).subscribe({
        next: (data) => console.log(data),
        error: (error) => {
          console.error(error);
          this.errorMessage = error.error[Object.keys(error.error)[0]];
        },
        complete: () => {
          console.log('successful');
          this.successFul = true;
          location.href = '/login'
        }
      })

  }

}
