import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FramePage } from './pages/shared/frame/frame.page';
import { AuthorizeGuard } from './guards/authorized-guard';
import { ManagerGuard } from './guards/manager-guard';

@NgModule({
  declarations: [
    AppComponent,
    FramePage
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    HttpClientModule,
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthorizeGuard,
    ManagerGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
