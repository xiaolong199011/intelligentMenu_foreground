import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatebbstopicmanagerPage } from './updatebbstopicmanager.page';

describe('UpdatebbstopicmanagerPage', () => {
  let component: UpdatebbstopicmanagerPage;
  let fixture: ComponentFixture<UpdatebbstopicmanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatebbstopicmanagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatebbstopicmanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
