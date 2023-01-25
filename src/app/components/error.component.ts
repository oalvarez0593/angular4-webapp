import { Component } from '@angular/core';

@Component({
  selector: 'error',
  templateUrl: '../views/error.component.html'
  
  })
export class ErrorComponent {

  ngOnInit(){
  	console.log('Se ha cargado el componente error.component.ts');
  }

}
