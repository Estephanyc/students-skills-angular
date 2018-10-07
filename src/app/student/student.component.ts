import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [NgbPopoverConfig]

})
export class StudentComponent implements OnInit {
  skillForm: FormGroup;
  @Input() student
  @Input() key
  skills$:  Observable<any>; 

  constructor(private database: AngularFireDatabase, private formBuilder: FormBuilder) {}
  ngOnInit(){
    this.skills$ = this.database.list(`students/${this.key}/Skills`).snapshotChanges()
    this.createSkillForm();
  }
  createSkillForm() {
    this.skillForm = this.formBuilder.group({
      content: ['', Validators.required],
    });
  }
  removeSkill(id){
    this.database.object(`students/${this.key}/Skills/${id}`).remove();
  }
  addSkill(key){
    let array = this.skillForm.value.content.split(',')
    console.log(array)

    array.forEach(element => {
      this.database.list(`students/${key}/Skills/`).push(element);
    });
  }
}
