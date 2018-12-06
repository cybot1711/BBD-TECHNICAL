import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFieldComponent } from './account-field.component';

describe('AccountFieldComponent', () => {
  let component: AccountFieldComponent;
  let fixture: ComponentFixture<AccountFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
