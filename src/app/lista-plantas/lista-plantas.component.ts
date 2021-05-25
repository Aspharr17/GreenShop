import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-lista-plantas',
  templateUrl: './lista-plantas.component.html',
  styleUrls: ['./lista-plantas.component.css']
})
export class ListaPlantasComponent implements OnInit {

  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('plantas').valueChanges();
  }

  ngOnInit(): void {
  }

}
