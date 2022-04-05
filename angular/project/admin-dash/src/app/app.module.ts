import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarLanguageComponent } from './navbar/navbar-language/navbar-language.component';
import { NavbarCartComponent } from './navbar/navbar-cart/navbar-cart.component';
import { NavbarNotificationsComponent } from './navbar/navbar-notifications/navbar-notifications.component';
import { NavbarUserComponent } from './navbar/navbar-user/navbar-user.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MedalCardComponent } from './dashboard/medal-card/medal-card.component';
import { StatisticsCardComponent } from './dashboard/statistics-card/statistics-card.component';
import { BarChartComponent } from './dashboard/bar-chart/bar-chart.component';
import { LineChartComponent } from './dashboard/line-chart/line-chart.component';
import { EarningsCardComponent } from './dashboard/earnings-card/earnings-card.component';
import { RevenueReportCardComponent } from './dashboard/revenue-report-card/revenue-report-card.component';
import { CompanyTableCardComponent } from './dashboard/company-table-card/company-table-card.component';
import { DeveloperMeetupCardComponent } from './dashboard/developer-meetup-card/developer-meetup-card.component';
import { BrowserStatesCardComponent } from './dashboard/browser-states-card/browser-states-card.component';
import { GoalOverviewCardComponent } from './dashboard/goal-overview-card/goal-overview-card.component';
import { TransactionCardComponent } from './dashboard/transaction-card/transaction-card.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, NavbarLanguageComponent, NavbarCartComponent, NavbarNotificationsComponent, NavbarUserComponent, SidemenuComponent, ContentComponent, DashboardComponent, MedalCardComponent, StatisticsCardComponent, BarChartComponent, LineChartComponent, EarningsCardComponent, RevenueReportCardComponent, CompanyTableCardComponent, DeveloperMeetupCardComponent, BrowserStatesCardComponent, GoalOverviewCardComponent, TransactionCardComponent],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
