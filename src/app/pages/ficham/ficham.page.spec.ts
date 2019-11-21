import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FichamPage } from './ficham.page';

describe('FichamPage', () => {
  let component: FichamPage;
  let fixture: ComponentFixture<FichamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FichamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
