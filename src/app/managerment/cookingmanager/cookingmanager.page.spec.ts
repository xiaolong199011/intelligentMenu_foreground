import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CookingmanagerPage } from './cookingmanager.page';

describe('CookingmanagerPage', () => {
  let component: CookingmanagerPage;
  let fixture: ComponentFixture<CookingmanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookingmanagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CookingmanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
