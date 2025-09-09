import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstersListComponent } from './monsters-list.component';

describe('MonstersListComponent', () => {
  let component: MonstersListComponent;
  let fixture: ComponentFixture<MonstersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonstersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonstersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
