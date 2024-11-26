import { NgIf } from '@angular/common';
import { Message } from 'primeng/api';

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '../../services/auth.service';
import { Route, Router } from '@angular/router';
import { MessageService } from 'primeng/api';;

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[  FormsModule,
    InputTextModule,
    CheckboxModule,
    DividerModule,
    ButtonModule,
    CardModule,
    DialogModule,
    ToastModule,
    InputGroupAddonModule,
    InputGroupModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string='';
  password:string='';
  value!: string;
  private tokenKey = 'authToken';

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) {}

login():void{
  this.authService.login(this.username,this.password).subscribe({
    next:()=>this.router.navigate(['/layout/dashboard']),
    error: (err) => {
      this.showErrorToast(err); // Método para mostrar errores
    }
  });
}
showErrorToast(error: any): void {
  // Crear un mensaje de tipo Message
  const message: Message = {
    severity: 'error',
    summary: 'Login Failed',
    detail: error.message
  };

  // Agregar el mensaje al servicio Toast
  this.messageService.add(message);
}
logout():void {
    this.authService.logout();
}

  isrecuperarview: boolean = false;
  isnocredencialview: boolean = false;
  isSuccessView: boolean = false;

  userayudaObj: any = {
    EmailId: ''
  };

  showRecoverView() {
    this.isrecuperarview = true;
    this.isnocredencialview = false;
  }

  showNoCredentialsView() {
    this.isrecuperarview = false;
    this.isnocredencialview = true;
  }

  onSubmitRecovery() {
    // Aquí puedes agregar la lógica para enviar el correo de recuperación
    console.log('Correo enviado a:', this.userayudaObj.EmailId);
    this.isSuccessView = true;
    this.isrecuperarview = false;
    this.isnocredencialview = false;
  }
}

