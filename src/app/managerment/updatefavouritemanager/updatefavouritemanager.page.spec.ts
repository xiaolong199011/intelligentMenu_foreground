import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatefavouritemanagerPage } from './updatefavouritemanager.page';

describe('UpdatefavouritemanagerPage', () => {
  let component: UpdatefavouritemanagerPage;
  let fixture: ComponentFixture<UpdatefavouritemanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatefavouritemanagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatefavouritemanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
