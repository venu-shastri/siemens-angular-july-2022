import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ViewkidComponent } from './viewkid/viewkid.component';
import { ContentkidComponent } from './contentkid/contentkid.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ViewkidComponent,
    ContentkidComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
