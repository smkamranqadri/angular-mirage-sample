import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StyledComponentsModule } from 'angular-styled-components';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    StyledComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
