import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [  TabViewModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    DropdownModule,
    FileUploadModule,
    FormsModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.css'
})
export class ConfigComponent {
   // Configuración del Sistema
   backgroundColor = '#ffffff';
   fontSize = 14;
 
   // Importar Empresas y Personas
   importEmpresas(event: any) {
     console.log('Archivo de empresas importado:', event);
   }
 
   importPersonas(event: any) {
     console.log('Archivo de personas importado:', event);
   }
 
   // Gestión de Usuarios
   userName = '';
   userPassword = '';
   uploadPhoto(event: any) {
     console.log('Foto de perfil subida:', event);
   }
   saveUserData() {
     console.log('Datos de usuario guardados:', { userName: this.userName, userPassword: this.userPassword });
   }
 
   // Acceso
   roles = [
     { label: 'Administrador', value: 'admin' },
     { label: 'Editor', value: 'editor' },
     { label: 'Usuario', value: 'user' },
   ];
   selectedRole = '';
   permissions = '';
 
   saveAccessData() {
     console.log('Datos de acceso guardados:', { selectedRole: this.selectedRole, permissions: this.permissions });
   }
 
   // Métodos del sistema
   saveSystemConfig() {
     console.log('Configuración del sistema guardada:', { backgroundColor: this.backgroundColor, fontSize: this.fontSize });
   }
 
   resetSystemConfig() {
     this.backgroundColor = '#ffffff';
     this.fontSize = 14;
   }
}
