import { Component } from '@angular/core';
import { NavbarComponent } from '../../../layouts/prop_layouts/navbarprop/navbarprop.component';
import { SidebarComponent } from '../../../layouts/prop_layouts/sidebarprop/sidebar.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppartementService } from '../../../services/Appartement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    ReactiveFormsModule
  ],
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {
  appartementForm: FormGroup;
  userId: number;

  constructor(
    private appartementService: AppartementService,
    private fb: FormBuilder,
    private router: Router
  ) {
    // Convertir la valeur récupérée de localStorage en nombre et gérer le cas où elle est null
    const storedUserId = localStorage.getItem('user_id');
    this.userId = storedUserId ? Number(storedUserId) : 0; // Utiliser 0 ou une valeur par défaut si l'ID est null

    this.appartementForm = this.fb.group({
      prix: [''],
      image: [null],
      videos: [null],
      adresse: [''],
      superficie: [''],
      status: [''],
      nombre_de_pieces: [''],
      niveau: [''],
      numero_appartement: [''],
      description: ['']
    });
  }

  // Méthode pour créer un appartement
  public creerAppartement(): void {
    const formData = new FormData();
    
    formData.append('prix', this.appartementForm.get('prix')?.value);
    formData.append('image', this.appartementForm.get('image')?.value);
    formData.append('videos', this.appartementForm.get('videos')?.value);
    formData.append('adresse', this.appartementForm.get('adresse')?.value);
    formData.append('superficie', this.appartementForm.get('superficie')?.value);
    formData.append('status', this.appartementForm.get('status')?.value);
    formData.append('nombre_de_pieces', this.appartementForm.get('nombre_de_pieces')?.value);
    formData.append('niveau', this.appartementForm.get('niveau')?.value);
    formData.append('numero_appartement', this.appartementForm.get('numero_appartement')?.value);
    formData.append('description', this.appartementForm.get('description')?.value);

    this.appartementService.ajouter(formData, this.userId)
      .subscribe(
        (response) => {
          console.log('Appartement créé avec succès', response);
          this.router.navigateByUrl('/liste-location');
        },
        (error) => {
          console.error('Erreur lors de la création de l\'appartement', error);
        }
      );
  }

  // Méthode pour gérer le changement du fichier (image ou vidéo)
  public onFileChange(event: any, type: 'image' | 'videos'): void {
    const file = event.target.files[0];
    if (type === 'image') {
      this.appartementForm.patchValue({ image: file });
    } else if (type === 'videos') {
      this.appartementForm.patchValue({ videos: file });
    }
  }
}
