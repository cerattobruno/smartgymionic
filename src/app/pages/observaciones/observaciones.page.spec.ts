import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObservacionesPage } from './observaciones.page';

describe('ObservacionesPage', () => {
  let component: ObservacionesPage;
  let fixture: ComponentFixture<ObservacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObservacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
