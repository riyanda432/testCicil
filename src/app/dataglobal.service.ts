import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataglobalService {
  dateGlobal = [];

  constructor() { 

  }
  saveDataLogin(data:any) {
    this.dateGlobal = data;    
}
}
