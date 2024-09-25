import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from '../urlMapping/Urls';
import { Observable } from 'rxjs';
import { Contrat } from '../models/Contrat';

@Injectable({
  providedIn: 'root'
})

export class ContratService {

  constructor(private http: HttpClient) { }

  public creerContrat(contrat: Contrat, idApp: number, idProp: number,emailClient: string): Observable<any>{
    return this.http.post<any>(Urls.CREATION_GENERATION_ENVOIE_EMAIL_CONTRAT+idApp+"/"+idProp+"/"+emailClient,contrat);
  }
 
}
