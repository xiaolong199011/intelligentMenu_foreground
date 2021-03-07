import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavouritemanagerPage } from './favouritemanager.page';

describe('FavouritemanagerPage', () => {
  let component: FavouritemanagerPage;
  let fixture: ComponentFixture<FavouritemanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritemanagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavouritemanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
