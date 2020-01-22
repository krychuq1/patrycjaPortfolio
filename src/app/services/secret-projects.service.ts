import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecretProjectsService {
  public server = 'http://ec2-34-245-138-16.eu-west-1.compute.amazonaws.com:3333/';
  // public server = 'http://localhost:3333/';

  private subject = new Subject<boolean>();
  private passwordSubject = new Subject<boolean>();
  constructor(private http: HttpClient) { }

  validatePassword(password: string): Promise<any> {
    return this.http.post(this.server + 'validate', {password}).toPromise();
  }
  async validateToken(): Promise<any> {
    console.log('going to validate token');
    this.subject.next(true);
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': localStorage.getItem('token') || ''
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    console.log(requestOptions);
    try {
      const res = await this.http.get(this.server + 'validateToken', requestOptions).toPromise();
      this.subject.next(false);
      return res;
    } catch (e) {
      this.passwordSubject.next(true);
      this.subject.next(false);
      throw new Error('elo mordo');

    }
  }
  getContent(fileName: string): Promise<any> {
    const headerDict = {
      'Authorization': localStorage.getItem('token')
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get(this.server + 'content?name=' + fileName, requestOptions).toPromise();
  }
  getPasswordNotifier() {
    return this.passwordSubject.asObservable();
  }
  getLoaderNotifier() {
    return this.subject.asObservable();
  }
}
