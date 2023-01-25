import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: '../views/home.component.html'
  
  })
export class HomeComponent {
 public titulo:string;

 constructor(){
   this.titulo = 'WebApp de Productos con Angular 4';
 }

 ngOnInit(){
   console.log('Se ha cargado el componente home.compoent.ts');
 }
}
