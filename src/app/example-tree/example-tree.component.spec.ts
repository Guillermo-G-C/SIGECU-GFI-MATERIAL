import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatIconModule, MatTreeModule } from '@angular/material';

import { ExampleTreeComponent } from './example-tree.component';

describe('ExampleTreeComponent', () => {
  let component: ExampleTreeComponent;
  let fixture: ComponentFixture<ExampleTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTreeComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatTreeModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
