import { Component } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductosService } from '../services/productos.services'; //importo la ruta donde se encuenta mi Servicio a consumir
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../services/global';

@Component({
  selector: 'producto-add',
  templateUrl: '../views/productos-add.component.html',
  providers: [ProductosService]
  })
export class ProductoAddComponent {
  public titulos:string;
  public producto:Producto;
  public filesToUpload;
  public resultUpload;

  constructor(
    private _productosService: ProductosService,
    private _route:ActivatedRoute,
    private _router: Router
  ){
    this.titulos = 'Almacenar Producto';
    this.producto = new Producto(0,'','',0,'');
  }

  ngOnInit(){
    console.log('Se ha cargado el componente producto.component.ts');
  }

  Enviar(){
    console.log(this.producto);
    if(this.filesToUpload && this.filesToUpload.length  >= 1){

      this._productosService.makeFileRequest(GLOBAL.url+'upload-file', [], this.filesToUpload).then((result) =>{
        console.log(result);
        this.resultUpload = result;
        this.producto.imagen = this.resultUpload.filename;
        this.saveProducto();
      }, (error) =>{
        console.log(error);
      });
    }else{
      this.saveProducto();
    }
  }

  saveProducto(){
    this._productosService.addProducto(this.producto).subscribe(
      result => {
        if(result.code == 200){
          alert('Se han insertado correctamente tus datos');
          this._router.navigate(['/productos']);
        }else{
          console.log(result);
        }
      },
      error =>{
        var err =<any>error;
        console.log(err);
      }
    );
  }


  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }

}
