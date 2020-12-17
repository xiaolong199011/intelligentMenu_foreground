import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenudetailPage } from './menudetail.page';

describe('MenudetailPage', () => {
  let component: MenudetailPage;
  let fixture: ComponentFixture<MenudetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenudetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenudetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
