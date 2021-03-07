import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsmanagerPage } from './tabsmanager.page';

describe('TabsmanagerPage', () => {
  let component: TabsmanagerPage;
  let fixture: ComponentFixture<TabsmanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsmanagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsmanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
