import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { StudentComponent } from './student/student.component';
import { SkillComponent } from './skill/skill.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { NavComponent } from './nav/nav.component';
import { of } from 'rxjs'

let spy: jasmine.Spy;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StudentComponent,
        SkillComponent,
        TooltipComponent
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireModule,
        of
      ]    
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
   it(`should have as title 'students'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('students');
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    spy = spyOn(app, 'getContent').and.returnValue(of('You have been warned'));

    fixture.detectChanges();
  });

  it('should call getContent one time and update the view', () => {
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.all().length).toEqual(1);
  });
});
