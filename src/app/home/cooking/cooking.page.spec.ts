import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CookingPage } from './cooking.page';

describe('CookingPage', () => {
  let component: CookingPage;
  let fixture: ComponentFixture<CookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
