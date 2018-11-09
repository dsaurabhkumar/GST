import { Injectable } from '@angular/core';

@Injectable()
export class CommonUtilService {

  constructor() { }

  validateForm(form){
    Object.keys(form.controls).forEach(field => {
      form.get(field).markAsTouched();
    });
  }

}
