import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularCodingResourcesModule } from '@tschuegge/angular-coding-resources';
import { ColoredCircleTestComponent } from './colored-circle-test/colored-circle-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ColoredCircleTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularCodingResourcesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
