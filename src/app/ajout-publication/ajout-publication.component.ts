import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PublicationsService } from '../publications.service';

@Component({
  selector: 'app-ajout-publication',
  templateUrl: './ajout-publication.component.html',
  styleUrls: ['./ajout-publication.component.css']
})
export class AjoutPublicationComponent implements OnInit {
  onSubmit(form:NgForm)
  {
    this.service.ajouterPulication(form.value['titre'],form.value['description']);
    alert("Publication Ajoutée");
  }
  constructor(private service : PublicationsService) { }

  ngOnInit() {

  }

}
