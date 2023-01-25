import { Component } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductosService } from '../services/productos.services'; //importo la ruta donde se encuenta mi Servicio a consumir
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'detalle-producto',
  templateUrl: '../views/detalle_producto.component.html',
  providers: [ProductosService]
  })
export class DetalleProductoComponent {
	public titulo:string;
  public producto:Producto;

	 constructor(
		private _productosService: ProductosService,
		private _route:ActivatedRoute,
		private _router: Router
  ){
		  this.titulo = 'Detalle de producto';
	 }

  ngOnInit(){
  	console.log('Se ha cargado el componente detalle_producto.component.ts');
    this.getProducto();
  }

  getProducto(){
    this._route.params.forEach((params:Params) => {
      let id = params['id']; // Acá tengo el ID capturado que viene de la URL.
      console.log('Él ID del producto es: ' + id);
      this._productosService.getProducto(id).subscribe(
        response =>{
          if(response.code == 200){
            this.producto = response.data;
          }else{
            this._router.navigate(['/productos']);
          }
        },
        error =>{
          var err = <any>error;
          console.log(err);
        }
      );
    });
  }
}
