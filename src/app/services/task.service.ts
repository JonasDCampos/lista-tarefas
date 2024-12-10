import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiURL = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  getTasks() : Observable<>{

  }
}