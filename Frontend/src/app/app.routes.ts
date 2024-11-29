import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { NoFoundComponent } from './paginas/no-found/no-found.component';
import { InventarioComponent } from './paginas/admin/inventario/inventario.component';
import { UsuariosComponent } from './paginas/admin/usuarios/usuarios.component';


export const routes: Routes = [
    {path: '', component:InicioComponent,title: 'inicio'},
    {path: 'inicio sesion', component: LoginComponent, title: 'inicio sesion'},
    {path: 'productos', component: ProductosComponent,title: 'productos'},
    {path: 'admin', component: AdminComponent, title: ' panel admin', children:
        [
            {path:'inventario', component:InventarioComponent,title: 'inventario'},
            {path:'usuarios',component:UsuariosComponent,title:'registro de usuarios'}
        ]
    },
    {path: 'registro', component: RegistroComponent, title: 'registro'},
    {path: '**', component: NoFoundComponent, title:'error 404'}
];
