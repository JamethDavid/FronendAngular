import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UserModel } from '../../interfaces/usuario.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestResponse } from 'src/app/informes/interfaces/RestResponse.interface';
import { OK } from 'src/utilidades/httpstatus';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit{

  loginForm = this.formBuilder.group({
    usuario:['',[Validators.required]],
    password:['',[Validators.required]],
  })
  constructor(private formBuilder: FormBuilder,private router:Router, private loginService:LoginService) {}
  ngOnInit(): void {
  }
  login() {
    if (this.loginForm.valid) {
      const usuario = this.loginForm.get('usuario')?.value as string;
      const password = this.loginForm.get('password')?.value as string;
      const userModel: UserModel = {
        usuario: usuario,
        password: password
      };
      this.loginService.iniciarSesion(userModel).subscribe({
        next: (response: RestResponse) => {
          console.log("Llamada al servidor:", response);
          if (response.responseCode == OK) {
            localStorage.setItem('token', response.body + "");
            this.router.navigateByUrl("informes");
            this.loginForm.reset();
          } else {
            // Manejar otros casos de éxito si es necesario
            alert("Error al iniciar sesión: " + response.message);
          }
        },
        error: (error: RestResponse) => {
          console.error("Error al iniciar sesión:", error);
          alert("Error al ingresar los datos");
        }
      });
    } else {
      alert("Error al ingresar los datos");

    }

  }
}
