import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BbstopicmenuPage } from './bbstopicmenu.page';

describe('BbstopicmenuPage', () => {
  let component: BbstopicmenuPage;
  let fixture: ComponentFixture<BbstopicmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbstopicmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BbstopicmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
