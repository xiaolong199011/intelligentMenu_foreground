import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BBSPage } from './bbs.page';

describe('BBSPage', () => {
  let component: BBSPage;
  let fixture: ComponentFixture<BBSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BBSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
