import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../models/producto';
import { GLOBAL } from './global';


@Injectable()
export class ProductosService{
 public url:string;

 constructor(private _http:Http){
   this.url = GLOBAL.url;
 }

 getProductos(){  
   return this._http.get(this.url + 'productos')//Aquí obtengo la url del servicio.
     .map(respuesta => respuesta.json()); // Acá con la propiedad map, capturo los valores del servicio y lo convierto a un fichero de tipo Json 
 }

 getProducto(id){  
   return this._http.get(this.url + 'producto/'+id)//Aquí obtengo la url del servicio.
     .map(respuesta => respuesta.json()); // Acá con la propiedad map, capturo los valores del servicio y lo convierto a un fichero de tipo Json 
 }

 addProducto(producto:Producto){
   let json = JSON.stringify(producto);
   let params = 'json='+json;
   let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

   return this._http.post(this.url+'productos', params, {headers: headers})
     .map(respuesta => respuesta.json());
 }

 editProducto(id, producto:Producto){
   let json = JSON.stringify(producto);
   let params = 'json='+json;
   let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

   return this._http.post(this.url+'update-producto/' + id, params, {headers: headers})
     .map(respuesta => respuesta.json());
 }

 deleteProducto(id){
   return this._http.get(this.url+'delete-producto/' + id)
     .map(respuesta => respuesta.json());
 }
 
 makeFileRequest(url: string, params:Array<string>, files:Array<File>){
   return new Promise((resolve, reject)=> {
     var formData: any = new FormData();
     var xhr = new XMLHttpRequest();

     for(var i=0; i < files.length; i++){
       formData.append('uploads[]', files[i], files[i].name);
     }
     xhr.onreadystatechange = function(){
       if(xhr.readyState==4){
         if (xhr.status == 200) {
           resolve(JSON.parse(xhr.response));
         }else{
           reject(xhr.response);
         }
       }
     };
     xhr.open('POST', url, true);
     xhr.send(formData);
   });
 }

}