import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateshoppingmanagerPage } from './updateshoppingmanager.page';

describe('UpdateshoppingmanagerPage', () => {
  let component: UpdateshoppingmanagerPage;
  let fixture: ComponentFixture<UpdateshoppingmanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateshoppingmanagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateshoppingmanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
