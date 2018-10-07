import { Component } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'students';
  list$:  Observable<any>; 

  constructor(private database: AngularFireDatabase) {
    this.list$ = this.database.list('/students').snapshotChanges()      
  
     let student={
      Foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3vhO4W-Hh7H9LXtOFcGc9ITi8_QPb52SsID5KX5vOt4S-ppK2A",
      Nombre: 'Andrea Guerrero',
      Skills:{
        1: 'value',
        2: 'Boostrap',
        3: 'Css',
        4: 'angular',
        5: 'as',
      }
    }
    for(let i=0; i< 10; i++){
/*        this.database.list(`students`).push(student);
 */    }  
  } 
}
