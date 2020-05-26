import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AjoutPublicationComponent } from './ajout-publication/ajout-publication.component';
import { AjoutCommentaireComponent } from './ajout-commentaire/ajout-commentaire.component';
import { PublicationComponent } from './publication/publication.component';


const routes: Routes = [
  {path : 'Formulaire',component:FormulaireComponent},
  {path : 'AjouterPublication',component : AjoutPublicationComponent},
  {path : 'AjouterCommentaire/:id',component:AjoutCommentaireComponent},
  {path : 'Publication/:id',component:PublicationComponent},
  {path : '',redirectTo:'Formulaire',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
