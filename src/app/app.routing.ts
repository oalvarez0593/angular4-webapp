import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//IMPORTAR COMPONENTES A UTILIZAR PARA LAS URLS

import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ListadoProductosComponent } from './components/listado_productos.component';
import { ProductoAddComponent } from './components/producto.component';
import { DetalleProductoComponent } from './components/detalle_producto.component';
import { ProductoEditComponent } from './components/editar_producto.component';

const appRoutes: Routes = [
	 {path: '', component: HomeComponent}, // LO que cargará cuando la url esté vacia.
	 {path: 'home', component: HomeComponent}, // LO que cargará cuando la url esté vacia.
	 {path: 'error', component: ErrorComponent}, // LO que cargará cuando la url esté vacia.
	 {path: 'productos', component: ListadoProductosComponent}, // LO que cargará cuando la url esté vacia.
	 {path: 'productos-add', component: ProductoAddComponent}, // LO que cargará cuando la url esté vacia.
	 {path: 'producto/:id', component: DetalleProductoComponent}, // LO que cargará cuando la url esté vacia.
	 {path: 'editar-producto/:id', component: ProductoEditComponent}, // LO que cargará cuando la url esté vacia.
	 {path: '**', component: ErrorComponent},	// Lo que cargará cuando dé un error, un 404, no encuentre página o etc.

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);