import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { User } from '../models/User';
import { Urls } from '../urlMapping/Urls';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private currentUser: any;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('authUser') || '{}');
  }

   // Méthode pour obtenir l'ID du propriétaire connecté
   getIdProprietaire() {
      const userId = localStorage.getItem('user_id');
      if (userId) {
        return parseInt(userId, 10); // Convertir en nombre entier si nécessaire
      }
      return null; // Retourner null si l'utilisateur n'est pas connecté
  }

  /***
   * Inscription
   */
  register(user: User) {
    return this.http.post(`${Urls.REGISTER}`,user);
  }

  /***
   * Connexion
  */
  login(user: User) {
    return this.http.post(`${Urls.LOGIN}`, user)
      .pipe(tap((result) => {
        localStorage.setItem('authUser', JSON.stringify(result));
      }));
  }

  /***
   * Deconnecter
   */
  logout() {
    localStorage.removeItem('authUser');
  }

  /***
   * User authentifié
   */
  isLoggedIn() {
    return localStorage.getItem('authUser') !== null;
  }

  /**
   * sercice users list
   */
  users(){
    return this.http.get<Array<User>>(Urls.COMPTES);
  }

}
