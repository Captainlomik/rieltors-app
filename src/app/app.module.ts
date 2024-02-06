import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBlockComponent } from './shared/menu-block/menu-block.component';
import { ClientsPageComponent } from './client/clients-page/clients-page.component';
import { TitleComponent } from './shared/title/title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SmallBlockComponent } from './client/small-block/small-block.component';
import { ClientDetailPageComponent } from './client/client-detail-page/client-detail-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './client/popup/popup.component';
import { MaterialModule } from './material.module';
import { AlertComponent } from './shared/alert/alert.component';
import { AlertService } from './shared/services/alert.service';
import { SearchPipe } from './shared/pipe/search.pipe';
import { RieltorsPageComponent } from './rieltor/rieltors-page/rieltors-page.component';
import { RieltorDetailPageComponent } from './rieltor/rieltors-detail-page/rieltor-detail-page.component';
import { CreatePopupComponent } from './rieltor/create-popup/create-popup.component';
import { SmallBlockRieltorComponent } from './rieltor/small-block/small-block.component';
import { SalePageComponent } from './sale/sale-page/sale-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBlockComponent,
    ClientsPageComponent,
    TitleComponent,
    SmallBlockComponent,
    ClientDetailPageComponent,
    PopupComponent,
    AlertComponent,
    SearchPipe, 
    RieltorsPageComponent,
    RieltorDetailPageComponent, 
    CreatePopupComponent, 
    SmallBlockRieltorComponent,
    SalePageComponent
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
