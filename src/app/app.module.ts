import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { LayoutModule } from './shared/layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleStrategy } from '@angular/router';
import { CustomTitleStrategy } from './core/seo/custom-title-strategy';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    CoreModule,

    LayoutModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
