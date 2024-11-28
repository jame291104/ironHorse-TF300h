import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { RegistroComponent } from './paginas/registro/registro.component';

export const routes: Routes = [
    {path: '', component:InicioComponent,title: 'inicio'},
    {path: 'inicio sesion', component: LoginComponent, title: 'inicio sesion'},
    {path: 'productos', component: ProductosComponent,title: 'productos'},
    {path: 'panel admin', component: AdminComponent, title: ' panel admin'},
    {path: 'registro', component: RegistroComponent, title: 'registro'}
];
