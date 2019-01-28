import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pic } from '../../interfaces/pic';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  pictures: Pic[];


  constructor(public navCtrl: NavController, private http: HttpClient) {
  }

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.http.get<Pic[]>('assets/test.json').subscribe(data => {
      this.pictures = data;
      console.log(this.pictures);
      
    });
  }
}