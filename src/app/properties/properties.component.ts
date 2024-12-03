import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  properties = [];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getProperties().subscribe(data => {
      this.properties = data;
    });
  }
}
