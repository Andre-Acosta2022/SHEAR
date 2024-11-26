import { Routes } from '@angular/router';
import { LoginComponent } from './AUTH/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ListarPracticaComponent } from './component/listar-practica/listar-practica.component';
import { PracticaComponent } from './component/practica/practica.component';
import { RegistrarEmpresaFormsComponent } from './component/registrar-empresa-forms/registrar-empresa-forms.component';
import { DocumentosComponent } from './component/documentos/documentos.component';
import { ConfigComponent } from './config/config.component';
export const routes: Routes = [

    
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      // Ruta para el componente de login
      {
        path: 'login',
        component: LoginComponent,
      },
      // Ruta protegida para las vistas dentro del layout
      {
        path: 'layout',
        component: LayoutComponent,
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent,
          },
          {
            path: 'empresas',
            component: RegistrarEmpresaFormsComponent,
          },
          {
            path: 'practica',
            component: ListarPracticaComponent,
          },
          {
            path: 'validar',
            component: PracticaComponent,
          },
          {
            path: 'carta',
            component: PracticaComponent,
          },
          {
            path: 'documentos',
            component: DocumentosComponent,
          },
          {
            path: 'validardoc',
            component: DocumentosComponent,
          },
          {
            path: 'configuracion',
            component: ConfigComponent,
          },
        ]
      },

  
      // Ruta comodín para redirigir a login si la ruta no existe
      {
        path: '**',
        redirectTo: 'login'
      }


];
