import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../shared/quiz-service.service';
import { LoginDetails } from '../LoginDetails';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';
import { Routes, Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
  // @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;

  // loginDetail: LoginDetails;
  RegistrationStatus: string = "";
  // Approuter: Routes;
  // EmailPattern ="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  EmailPattern ="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$";
  MobileNumberPattern = "^[6-9][0-9]{9}$";
  constructor(private ds: QuizServiceService, private toastrService: ToastrService, private route: Router) { }
  
  loginDetail: LoginDetails;
  
  // log(x) {  
  //   console.log(x); 
  // }
  
  Submit(f): void {
    // this.loginDetail("UserName") = "";
    // console.log(f.value.RegisterForm.Email);

    this.loginDetail = 
     {
      UserName: f.value.RegisterForm.Email,
      password: f.value.RegisterForm.Pwd,
      PersonName: f.value.RegisterForm.PersonName,
      MobileNumber: f.value.RegisterForm.MobileNumber
    };
  
    // console.log(this.loginDetail);
    this.ds.AddNewUser (this.loginDetail).subscribe (
      (data) => {
        console.log(data);
      if (data.Module == "NewRegistration" && data.IsSuccess == true)
      {
        // console.log(data);
        this.RegistrationStatus = "Success";
        // console.log("done");
        this.toastrService.success('You','Success');
        setTimeout( () => 
          {
              this.RegistrationStatus= "";
              this.route.navigate(['/login']);
          }, 5000);  
        // this.Approuter.map('/login');
        
      }
      else if (data.Module == "NewRegistration" && data.Message == "User Already Exists")
      {
        this.RegistrationStatus = "UserExists";
        // console.log("done");
        this.toastrService.warning('You','Success');
        setTimeout( () => {this.RegistrationStatus= ""}, 5000);  

      }

        }, (error) => {console.log(error);}
    )
    
    // console.log(this.loginDetail);
    // console.log(f);
    // if (f.touched && f.valid) 
    //   {alert(f.value.Pwd)}
    // else 
    // {alert("something is bad")}

  }

  ngOnInit()
  {
    localStorage.clear();
    // this.toastrService.overlayContainer = this.toastContainer;
    // this.ds.getLoginByName().subscribe (
    //   data => {this.loginDetail = data;}, () => {console.log("something went wrong")}
    // );
  }

  ExistingUserclick()
  {
    this.RegistrationStatus= "";   
    // this.route.navigate(['/login']);
  }
}