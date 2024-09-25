import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from '../urlMapping/Urls';
import { Client } from '../models/Client';
import { Observable } from 'rxjs';
import { DemandeLocation } from '../models/DemandeLocation';
import { DemandeStats } from '../models/DemandeStat';

@Injectable({
  providedIn: 'root'
})

export class DemanderLocationService {

  constructor(private http: HttpClient) { }

  /***
   * demande de location
   */
  public faireDemande(client: Client, idApp: number): Observable<any> {
    return this.http.post<Client>(Urls.DEMANDE_LOCATION+idApp,client);
  }
  
  /***
   * Liste des demandes de location
   */
  public liste() {
    return this.http.get<Array<DemandeLocation>>(Urls.LISTE_DEMANDE_LOCATION);
  }

   /***
   * Liste des locations
   */
   public locations() {
    return this.http.get<Array<DemandeLocation>>(Urls.LISTE_LOCATIONS);
  }

  /***
   * Details demande de location
   */
  public detailsDemandeLocation(id: number): Observable<DemandeLocation>{
    return this.http.get<DemandeLocation>(Urls.DETAILS_DEMANDE_LOCATION + id);
  }

  /**
   * Nombre de demandes
   */
  public nombreDemandes(): Observable<DemandeStats>{
    return this.http.get<DemandeStats>(Urls.NOMBRE_DEMANDES);
  }

}
