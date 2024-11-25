import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  baseURL: string = "https://mywebsite.com";
 
  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'application/x-www-form-urlencoded',
      // 'Access-Control-Allow-Origin': origin,
      // 'Access-Control-Allow-Credentials': 'true'
      // 'Access-Control-Allow-Headers': '*',
    }),
    withCredentials: true
  };

  contactUs(customerDetails: any) {
    debugger;
    const headers = new HttpHeaders().set('X-XSRF-TOKEN', 'abc');
    return this.http.post<any>(this.baseURL + '/wp-admin/admin-ajax.php', customerDetails, this.httpOptions); //{headers: headers} // this.httpOptions); //{headers: this.headerResponse}
  }

}
