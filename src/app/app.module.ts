import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { Highlight1Directive } from './highlight1.directive';
import { ChangeTextDirective } from './change-text.directive';
import { PramsDirective } from './params.directive';
import { DirectiveComponent } from './directive/directive.component';

@NgModule({
  declarations: [
    AppComponent,
    Highlight1Directive,
    ChangeTextDirective,
    PramsDirective,
    HighlightDirective,
    DirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
