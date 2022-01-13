import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { SetupComponent } from './setup/setup.component';
import { TrendComponent } from './trend/trend.component';

const routes: Routes = [
  { path: 'chjs/home', component: HomeComponent },
  { path: 'chjs/map', component: MapComponent },
  { path: 'chjs/event', component: EventComponent },
  { path: 'chjs/trend', component: TrendComponent },
  { path: 'chjs/data', component: DataComponent },
  { path: 'chjs/setup', component: SetupComponent },
  { path: 'chjs', redirectTo: 'chjs/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
