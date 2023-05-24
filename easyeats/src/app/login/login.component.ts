import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) {}

  loginUser(email: string, senha: string) {
    console.log('Passei no primeiro ponto do login');
    $.get(
      'http://localhost:3000/login',
      {
        "email": email,
        "senha": senha,
      },
      (res) => {
        console.log(res);
        console.log('Passei no segundo ponto do login');
        if (res === 'Login realizado com sucesso!') {
          this.router.navigate(['/']);
        } else if (res === 'Usuário não encontrado.') {
          alert('Usuário não encontrado.');
        } else {
          alert('Senha incorreta.');  
        }
      }
    );
  }
}
