import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShopcartPage } from './shopcart.page';

describe('ShopcartPage', () => {
  let component: ShopcartPage;
  let fixture: ComponentFixture<ShopcartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopcartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShopcartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
