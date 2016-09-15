import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HighlightPipe }  from './select/select-pipes';
import { OffClickDirective } from './select/off-click';
import { SelectComponent } from './select/select';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, HighlightPipe, OffClickDirective ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
