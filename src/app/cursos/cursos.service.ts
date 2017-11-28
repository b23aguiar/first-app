import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getPortal(){
    return 'http://hazzac.com.br';
  }

  getCursos(){
    return ['Java', 'Angular', 'TypeScript', 'ECMA 6'];
  }
  
}
