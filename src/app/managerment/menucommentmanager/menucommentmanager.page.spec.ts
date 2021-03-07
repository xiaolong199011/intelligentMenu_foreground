import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenucommentmanagerPage } from './menucommentmanager.page';

describe('MenucommentmanagerPage', () => {
  let component: MenucommentmanagerPage;
  let fixture: ComponentFixture<MenucommentmanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenucommentmanagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenucommentmanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
