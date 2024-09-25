export class Urls{

    // URL DE BASE LOCAL API LARAVEL
    private static BASE_URL = "http://127.0.0.1:8000/api";

    // AUHT APIs
    static REGISTER = Urls.BASE_URL + "/register";
    static LOGIN = Urls.BASE_URL + "/login";
    static LOGOUT = Urls.BASE_URL + "/logout";
    static COMPTES = Urls.BASE_URL + "/users";
    

    // APPARTEMENT APIs
    static AJOUTER_APPARTEMENT = Urls.BASE_URL + "/ajouter-appartement/";
    static LISTE_APPARTEMENT = Urls.BASE_URL + "/disponibles";
    static DETAILS_APPARTEMENT = Urls.BASE_URL + "/appartement/";
    static APPARTEMENT_DEMANDE_PROP = Urls.BASE_URL + "/appartements/";
    static APPARTEMENT_ACCEPTE_PROP = Urls.BASE_URL + "/demandes-acceptees/";

    
    // DEMANDES APIs
    static DEMANDE_LOCATION = Urls.BASE_URL + "/demande-location/";
    static LISTE_DEMANDE_LOCATION = Urls.BASE_URL + "/demandes-en-attente";
    static LISTE_LOCATIONS = Urls.BASE_URL + "/demandes-acceptees";
    static DETAILS_DEMANDE_LOCATION = Urls.BASE_URL + "/details-demandes-location/";
    static NOMBRE_DEMANDES = Urls.BASE_URL + "/demandes/nombres";
    
    

    // CONTRAT APIs
    static CREATION_GENERATION_ENVOIE_EMAIL_CONTRAT = Urls.BASE_URL + "/creer-contrat/";
    static LISTE_PAIMENTS = Urls.BASE_URL + "/paiements/";
    static BILAN_JOUNALIER = Urls.BASE_URL + "/bilan-journalier";


}