import { Component, OnInit } from '@angular/core';
import{PublicationsService} from '../publications.service';
import { Publication } from '../Classes/Publication';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  publications : Publication[];
  recherche : string;
  constructor(private publicationsService:PublicationsService) { }
  ngOnInit() {
    this.publications = this.publicationsService.tabPublication;
  }

}
