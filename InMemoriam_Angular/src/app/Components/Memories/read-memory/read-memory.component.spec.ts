import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMemoryComponent } from './read-memory.component';

describe('ReadMemoryComponent', () => {
  let component: ReadMemoryComponent;
  let fixture: ComponentFixture<ReadMemoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadMemoryComponent]
    });
    fixture = TestBed.createComponent(ReadMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
