import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule, MatPaginatorModule} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import { ListLeagueComponent } from './list-league/list-league.component';
import { HeadToHeadComponent } from './head-to-head/head-to-head.component';
import { LastMatchComponent } from './last-match/last-match.component';
import { PerformaceComponent } from './performace/performace.component';
import { FooterComponent } from './footer/footer.component';
import { GraphsComponent } from './graphs/graphs.component';
import { ApiService } from './api.service';
import {SlideshowModule} from 'ng-simple-slideshow';

import { SeasonComponent } from './season/season.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    LeagueTableComponent,
    ListLeagueComponent,
    HeadToHeadComponent,
    LastMatchComponent,
    PerformaceComponent,
    FooterComponent,
    GraphsComponent,
   
    SeasonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlideshowModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    NgxChartsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
