import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatebbscommentmanagerPage } from './updatebbscommentmanager.page';

describe('UpdatebbscommentmanagerPage', () => {
  let component: UpdatebbscommentmanagerPage;
  let fixture: ComponentFixture<UpdatebbscommentmanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatebbscommentmanagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatebbscommentmanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
