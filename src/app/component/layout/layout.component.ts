import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [BadgeModule, MenuModule, RouterOutlet,SidebarModule, ButtonModule, AvatarModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e:Event): void {
      this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = false;
  logout():void {
    this.authService.logout();
}


  items: MenuItem[] | undefined;

  constructor(
    private router: Router,
    private authService: AuthService, 
  ) {}

  ngOnInit() {
    this.items = [
    {  label: '',
      items: [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => this.router.navigate(['/layout/dashboard'])
      },
    ]
  },
    {
        separator: true
      },
      
      {
        label: 'Inicio Practicas',
        items: [
          {
            label: 'Registrar Practicas',
            icon: 'pi pi-plus',
            command: () => this.router.navigate(['/layout/practica'])
          },
          {
            label: 'Validar Practica',
            icon: 'pi pi-verified',
            command: () => this.router.navigate(['/layout/validar'])
          },
          {
            label: 'Carta de Presentacion',
            icon: 'pi pi-envelope',
            command: () => this.router.navigate(['/layout/carta'])
          },
          {
            label: 'Documentos Iniciales',
            icon: 'pi pi-file-plus',
            command: () => this.router.navigate(['/layout/documentos'])
          },
          {
            label: 'Validar Documentos ',
            icon: 'pi pi-verified',
            command: () => this.router.navigate(['/layout/documentos'])
          }
        ]
      },
      {
        separator: true
      },
      {
        label: 'Evaluaciones',
        items: [
          {
            label: 'Notas',
            icon: 'pi pi-pen-to-square',
            command: () => this.router.navigate(['/layout/notasevaluacion'])
          },
          {
            label: 'Reporte',
            icon: 'pi pi-inbox',
            command: () => this.router.navigate(['/layout/reportehorascumplidas'])
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => this.router.navigate(['/logout'])
          }
        ]
      },
      {
        separator: true
      },
      {
        label: 'Settings',
        items: [
          {
            label: 'Configuracion',
            icon: 'pi pi-cog',
            command: () => this.router.navigate(['/layout/configuracion'])
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => this.router.navigate(['/login'])
          }
        ]
      }
    ];
  }
}
