import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TitleStrategy } from '@angular/router';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  data={
    to:"",
    subject:"",
    message:""
  }
  flag=true;
  reset(){
    this.data={
      to:"",
      subject:"",
      message:""
    }
  }
  constructor(private email:EmailService,private snak:MatSnackBar){}
  doSubmitForm(){
    console.log("Data",this.data);
    if(this.data.to =='' || this.data.subject == '' || this.data.message == ''){
      this.snak.open("feilds can not be empty !!", "OK");
      return;
    }
    this.flag=false;
    this.email.sendEmail(this.data).subscribe(
      (response:any) => {
        console.log(response);
        this.reset();
        this.flag=true;
        this.snak.open(response.token,"Ok")
      },
      (error:any) => {
        console.log(error);
        this.reset();
        this.flag=true;
        this.snak.open("Email Not send","Cancel");
      }
    )
  }
}
