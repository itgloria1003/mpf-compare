/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListMpfComponent } from './list-mpf.component';

describe('ListMpfComponent', () => {
  let component: ListMpfComponent;
  let fixture: ComponentFixture<ListMpfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMpfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
