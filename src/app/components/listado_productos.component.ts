import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductosService } from '../services/productos.services'; //importo la ruta donde se encuenta mi Servicio a consumir
import { Producto } from '../models/producto';


@Component({
  selector: 'listado_productos',
  templateUrl: '../views/listado_productos.component.html',
  providers: [ProductosService]
  })
export class ListadoProductosComponent {
  public titulo:string;
  public titulo2:string;
  public productos:Producto[];
  public seguro:any;

  constructor(
  private _route : ActivatedRoute,
  private _router : Router,
  private _productosService: ProductosService
  ){
    this.titulo = 'Listado de Productos en tabla';
    this.titulo2 = 'Listado de Productos en cuadritos';
    this.seguro = null;
  }

  ngOnInit(){
    this.getProductos();
    console.log('Se ha cargado el componente listado_productos.compoent.ts');
  }

  getProductos(){
    this._productosService.getProductos().subscribe(
      result => {
          
        if(result.code != 200){
          console.log(result);
        }else{
          this.productos = result.data;
        }
      },
      error => {
        var err  = <any>error;
        console.log(err);
      }
    );//subscribe se utiliza para poder capturar la respuesta del servicio.
  }

  EliminarProducto(id){
    this._productosService.deleteProducto(id).subscribe(
      result => {
        if(result.code == 200){
          alert('Se ha eliminado exitosamente el producto');
          this.getProductos();
        }else{
          alert('No se ha podido eliminar el producto');
          console.log(result);
        }
      },
      error =>{
        var err =<any>error;
        console.log(err);
      }
    );
  }

  BorrarConfirm(id){
    this.seguro = id;
  }

  cancelarConfirm(){
    this.seguro = null;
  }



}
