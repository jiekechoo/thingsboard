import { LayoutModule } from "@angular/cdk/layout";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatOptionModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DataComponent } from "./data/data.component";
import { EventComponent } from "./event/event.component";
import { FaultAlarmComponent } from "./home/fault-alarm/fault-alarm.component";
import { GasAlarmComponent } from "./home/gas-alarm/gas-alarm.component";
import { HomeComponent } from "./home/home.component";
import { Login1Component } from "./home/login/login.component";
import { MapComponent } from "./map/map.component";
import { NavComponent } from "./nav/nav.component";
import { SetupComponent } from "./setup/setup.component";
import { TrendComponent } from "./trend/trend.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MapComponent,
    EventComponent,
    TrendComponent,
    DataComponent,
    SetupComponent,
    Login1Component,
    GasAlarmComponent,
    FaultAlarmComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    MatOptionModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
