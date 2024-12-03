import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  property: any;

  constructor(private route: ActivatedRoute, private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.firebaseService.getPropertyById(id).subscribe(data => {
      this.property = data;
    });
  }
}
