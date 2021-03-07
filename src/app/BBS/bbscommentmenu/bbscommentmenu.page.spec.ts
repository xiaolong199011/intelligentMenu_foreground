import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BbscommentmenuPage } from './bbscommentmenu.page';

describe('BbscommentmenuPage', () => {
  let component: BbscommentmenuPage;
  let fixture: ComponentFixture<BbscommentmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbscommentmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BbscommentmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
