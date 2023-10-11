import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildsPacksComponent } from './childs-packs.component';

describe('ChildsPacksComponent', () => {
  let component: ChildsPacksComponent;
  let fixture: ComponentFixture<ChildsPacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildsPacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildsPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
