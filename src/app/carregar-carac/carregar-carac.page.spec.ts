import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarregarCaracPage } from './carregar-carac.page';

describe('CarregarCaracPage', () => {
  let component: CarregarCaracPage;
  let fixture: ComponentFixture<CarregarCaracPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarregarCaracPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarregarCaracPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
