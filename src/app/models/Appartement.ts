export interface Appartement {
    id?: number | null;
    prix?: number | null;
    image?: string | null;
    videos?: string | null;
    adresse?: string | null;
    disponibilite?: boolean | null;  // 1 pour disponible, 0 pour non disponible
    status?: string | null;  // "location" ou autres statuts
    superficie?: number | null;
    nombre_de_pieces?: number | null;
    niveau?: number | null;
    numero_appartement?: string | null;
    description?: string | null;
}
