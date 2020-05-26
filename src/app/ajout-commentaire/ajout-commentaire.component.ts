import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicationsService } from '../publications.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajout-commentaire',
  templateUrl: './ajout-commentaire.component.html',
  styleUrls: ['./ajout-commentaire.component.css']
})
export class AjoutCommentaireComponent implements OnInit {
  idp : number;
  onSubmit(form:NgForm){
    this.service.ajouterCommentaire(this.idp,form.value['description']);
    alert("Commentaire Ajouté");
  }
  constructor(private activatedRoute:ActivatedRoute,private service:PublicationsService) { }
  
  ngOnInit() {
    this.idp = this.activatedRoute.snapshot.params['id'];
  }
}
