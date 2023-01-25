import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ListadoProductosComponent } from './components/listado_productos.component';
import { ProductoAddComponent } from './components/producto.component';
import { DetalleProductoComponent } from './components/detalle_producto.component';
import { ProductoEditComponent } from './components/editar_producto.component';

@NgModule({
  declarations: [
  AppComponent,
  HomeComponent,
  ErrorComponent,
  ListadoProductosComponent,
  ProductoAddComponent,
  DetalleProductoComponent,
  ProductoEditComponent,
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  routing,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
  })
export class AppModule { }
