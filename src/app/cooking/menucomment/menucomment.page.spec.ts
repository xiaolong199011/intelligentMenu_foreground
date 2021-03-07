import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenucommentPage } from './menucomment.page';

describe('MenucommentPage', () => {
  let component: MenucommentPage;
  let fixture: ComponentFixture<MenucommentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenucommentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenucommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
