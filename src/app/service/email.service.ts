import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  public BASE_URL:string="http://192.168.10.14:5001/api/v1/mail";
  constructor(private http:HttpClient) { }

  sendEmail(data:any){
    return this.http.post(`${this.BASE_URL}/send-mail`,data);
  }
}
