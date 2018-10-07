import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  providers: [NgbPopoverConfig]

})
export class SkillComponent {
  @Input() skill
  @Input() key
  @Output() valueRemove = new EventEmitter<any>();

  constructor(config: NgbPopoverConfig) {}

  deleteSkill=()=>{
    this.valueRemove.emit(this.key);
  }
}
