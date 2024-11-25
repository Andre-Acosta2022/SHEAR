import { NgIf } from '@angular/common';
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
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[FormsModule, InputGroupAddonModule,InputGroupModule, InputTextModule, CheckboxModule , RadioButtonModule,DividerModule,ToastModule,CardModule, ButtonModule,DialogModule,InputTextModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  value!: string;

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

