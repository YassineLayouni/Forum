import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { PublicationComponent } from './publication/publication.component';
import { AjoutPublicationComponent } from './ajout-publication/ajout-publication.component';
import { AjoutCommentaireComponent } from './ajout-commentaire/ajout-commentaire.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    PublicationComponent,
    AjoutPublicationComponent,
    AjoutCommentaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
