import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DataComponent } from "./data/data.component";
import { EventComponent } from "./event/event.component";
import { HomeComponent } from "./home/home.component";
import { MapComponent } from "./map/map.component";
import { SetupComponent } from "./setup/setup.component";
import { TrendComponent } from "./trend/trend.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "map", component: MapComponent },
  { path: "event", component: EventComponent },
  { path: "trend", component: TrendComponent },
  { path: "data", component: DataComponent },
  { path: "setup", component: SetupComponent },
  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
