import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BbsmanagerPage } from './bbsmanager.page';

describe('BbsmanagerPage', () => {
  let component: BbsmanagerPage;
  let fixture: ComponentFixture<BbsmanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbsmanagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BbsmanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
