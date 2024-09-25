import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appartement } from '../models/Appartement';
import { Urls } from '../urlMapping/Urls';
import { Observable } from 'rxjs';
import { DemandeLocation } from '../models/DemandeLocation';

@Injectable({
  providedIn: 'root'
})

export class AppartementService {

  constructor(private http: HttpClient) { }

  /***
   * Ajouter app
   */
  public ajouter(app: FormData, idProprietaire: number): Observable<any> {
    // Ajouter l'ID du propriétaire connecté dans le FormData
    app.append('user_id', idProprietaire.toString());
    
    return this.http.post<Appartement>(Urls.AJOUTER_APPARTEMENT+idProprietaire, app);
  }
  
  /***
   * Liste app
   */
  public liste() {
    return this.http.get<Array<Appartement>>(Urls.LISTE_APPARTEMENT);
  }

  /***
   * Liste app
   */
  public mesAppartements(id: number) {
    return this.http.get<Array<Appartement>>(Urls.APPARTEMENT_DEMANDE_PROP+id);
  }


  /***
   * Liste app
   */
  public appartementsAcceptes(id: number) {
    return this.http.get<Array<DemandeLocation>>(Urls.APPARTEMENT_ACCEPTE_PROP+id);
  }



  /***
   * details appartement
   */

public detailsAppartement(id: number){
    return this.http.get(Urls.DETAILS_APPARTEMENT+id);
}


}
