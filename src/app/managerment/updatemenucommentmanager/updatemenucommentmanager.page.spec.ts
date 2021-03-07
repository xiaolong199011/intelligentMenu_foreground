import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatemenucommentmanagerPage } from './updatemenucommentmanager.page';

describe('UpdatemenucommentmanagerPage', () => {
  let component: UpdatemenucommentmanagerPage;
  let fixture: ComponentFixture<UpdatemenucommentmanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatemenucommentmanagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatemenucommentmanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
