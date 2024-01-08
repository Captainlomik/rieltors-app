import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBlockComponent } from './shared/menu-block/menu-block.component';
import { ClientsPageComponent } from './clients-page/clients-page.component';
import { TitleComponent } from './shared/title/title.component';
import { FormsModule } from '@angular/forms';
import { SmallBlockComponent } from './shared/small-block/small-block.component';
import { ClientDetailPageComponent } from './client-detail-page/client-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBlockComponent,
    ClientsPageComponent,
    TitleComponent,
    SmallBlockComponent,
    ClientDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
