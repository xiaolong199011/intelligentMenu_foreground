import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BbsdetailPage } from './bbsdetail.page';

describe('BbsdetailPage', () => {
  let component: BbsdetailPage;
  let fixture: ComponentFixture<BbsdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbsdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BbsdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
