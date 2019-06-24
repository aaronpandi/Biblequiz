import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { QuizServiceService } from '../shared/quiz-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    LoginStatus: string = "";
    // EmailPattern ="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    // EmailPattern ="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$";
    MobileNumberPattern = "^[0-9]*$";
    loginDetail;
  
    constructor(private ds: QuizServiceService, private toastrService: ToastrService, private route: Router) { }
  
    Submit(loginform): void {
      // this.loginDetail("UserName") = "";
      // console.log(f.value.RegisterForm.Email);
  
      this.loginDetail = 
       {
        // f.value.RegisterForm.MobileNumber
        UserName: loginform.value.LoginFormModelGrp.UserName,
        password: loginform.value.LoginFormModelGrp.Pwd 
      };
    
      // console.log(this.loginDetaing servel);
      this.ds.LoginValidation(this.loginDetail).subscribe (
        (data) => {
          // console.log("Aaron");
          // console.log(data);
        if (data.Module == "LoginCheck" && data.IsSuccess == true)
        {
          this.ds.LoggedInUser = this.loginDetail.UserName;
          this.ds.LoggedInPersonName = data.Message
          // this.LoginStatus = "Success";
          // console.log("done");
          localStorage.clear();
          // console.log("Local storage after clearing");
          // console.log(localStorage.getItem("seconds"));
          localStorage.setItem('participant', JSON.stringify(data));
          localStorage.setItem('userLoggedIn', this.loginDetail.UserName);
          // this.toastrService.success('You','Success');
          this.LoginStatus= "",
          // window.alert("Hi");
          // this.route.navigate(['/landing']);
          this.route.navigate(['/form']);
          
          
          // setTimeout( () => 
          //   {
          //       this.LoginStatus= "",
          //       this.route.navigate(['/landing']);
          //   }, 5000);
            // console.log("Error");  
          // this.Approuter.map('/login');
          
        }
        else if (data.Module == "LoginCheck" && data.Message == "Invalid password")
        {
          this.LoginStatus = "InvalidPassword";
          // console.log("done");
          // this.toastrService.error('You','Failure');
          setTimeout( () => {this.LoginStatus= ""}, 5000);  
  
        }
        else if (data.Module == "LoginCheck" && data.Message == "User Doesn't exists")
        {
          this.LoginStatus = "InvalidUser";
          // console.log("done");
          // this.toastrService.error('You','Failure');
          setTimeout( () => {this.LoginStatus= ""}, 5000);  
  
        }
  
          }, (error) => {
            // console.log(error);
          }
      )
    }
  
  
    ngOnInit() {
      localStorage.clear();      
    }
  
    
    NewUserclick()
    {
      // window.alert("Hi");
      // this.ds= "";   
      // this.route.navigate(['/register']);
      // console.log("Router State Log: ");
      // console.log(this.route.routerState);
    }
  }
  