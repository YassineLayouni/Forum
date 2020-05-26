import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Publication } from '../Classes/Publication';
import { PublicationsService } from '../publications.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  idp : number;
  pub : Publication;
  constructor(private activatedRoute : ActivatedRoute,private service : PublicationsService) { }

  ngOnInit() {
    this.idp = this.activatedRoute.snapshot.params['id'];
    this.pub = this.service.chercherPublication(this.idp);
  }

}
