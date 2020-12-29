import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule, BrowserAnimationsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('Should succeed', () => {
    const spyDocumentClick = spyOn(component, 'onClick').and.callThrough();
    
    fixture.detectChanges();
    const pageX = 100;
    const pageY = 150;
    const event = new MouseEvent('click',
    {
        view: window,
        relatedTarget: document,
        clientX: pageX,
        clientY: pageY

    });
    component.onClick(event);
    fixture.detectChanges();
    
    const squarebox = fixture.debugElement.query(By.css('.squarebox'));
    expect(squarebox.nativeElement.offsetLeft).toEqual(pageX);
  });
});
