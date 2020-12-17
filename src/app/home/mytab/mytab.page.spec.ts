import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MytabPage } from './mytab.page';

describe('MytabPage', () => {
  let component: MytabPage;
  let fixture: ComponentFixture<MytabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MytabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
