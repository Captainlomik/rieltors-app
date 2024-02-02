import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBlockComponent } from './shared/menu-block/menu-block.component';
import { ClientsPageComponent } from './clients-page/clients-page.component';
import { TitleComponent } from './shared/title/title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SmallBlockComponent } from './shared/small-block/small-block.component';
import { ClientDetailPageComponent } from './client-detail-page/client-detail-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './shared/popup/popup.component';
import { MaterialModule } from './material.module';
import { AlertComponent } from './shared/alert/alert.component';
import { AlertService } from './shared/services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuBlockComponent,
    ClientsPageComponent,
    TitleComponent,
    SmallBlockComponent,
    ClientDetailPageComponent,
    PopupComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
