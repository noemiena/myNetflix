import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  vote: number = 3.5;
  stellinaPiena = faStar;
  mezzaStellina = faStarHalfAlt;
  stellinaVuota = faStarEmpty;

  constructor() { }

  ngOnInit(): void {
  }

}
