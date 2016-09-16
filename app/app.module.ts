import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HighlightPipe }  from './select/select-pipes';
import { OffClickDirective } from './select/off-click';
import { SelectComponent } from './select/select';
import { SELECT_DIRECTIVES } from './select';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HighlightPipe, OffClickDirective, SelectComponent, SELECT_DIRECTIVES ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
