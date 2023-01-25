import { Component } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductosService } from '../services/productos.services'; //importo la ruta donde se encuenta mi Servicio a consumir
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../services/global';

@Component({
  selector: 'producto-edit',
  templateUrl: '../views/productos-add.component.html',
  providers: [ProductosService]
  })
export class ProductoEditComponent {
	public titulos:string;
	public producto:Producto;
	public filesToUpload;
	public resultUpload;
  public is_edit:boolean;

	 constructor(
		private _productosService: ProductosService,
		private _route:ActivatedRoute,
		private _router: Router
  ){
		  this.titulos = 'Editar Producto';
		  this.producto = new Producto(0,'','',0,'');
    this.is_edit = true;
	 }

  ngOnInit(){
  	console.log('Se ha cargado el componente editar_producto.component.ts');
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

  Enviar(){
    console.log(this.producto);
    if(this.filesToUpload && this.filesToUpload.length  >= 1){

      this._productosService.makeFileRequest(GLOBAL.url+'upload-file', [], this.filesToUpload).then((result) =>{

        console.log(result);
        this.resultUpload = result;
        this.producto.imagen = this.resultUpload.filename;
        this.updateProducto();
      }, (error) =>{
        console.log(error);
      });
    }else{
      this.updateProducto();
    }

  }

  updateProducto(){
    this._route.params.forEach((params:Params) => {
      let id = params['id']; // Acá tengo el ID capturado que viene de la URL.
      this._productosService.editProducto(id, this.producto).subscribe(
        result => {
          if(result.code == 200){
            alert('Se han actualizado correctamente tus datos');
            this._router.navigate(['/producto/', id]);
          }else{
            console.log(result);
          }
        },
        error =>{
          var err =<any>error;
          console.log(err);
        }
      );
    });
  }

  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }


}
