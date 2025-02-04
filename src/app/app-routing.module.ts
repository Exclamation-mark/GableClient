import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import {IntegrateRoutingModule} from './integrate/integrate-routing.module';
import {UnitRoutingModule} from './unit/unit-routing.module';
import {AppComponent} from './app.component';
import {CliRoutingModule} from './cli/cli-routing.module';
import {UnitTwoRoutingModule} from './unit-two/unit-two-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'unit',
    pathMatch: 'full'
  },
  { path: 'unit', loadChildren: () => import('./unit/unit.module').then((m) => m.UnitModule) },
  { path: 'unit-two', loadChildren: () => import('./unit-two/unit-two.module').then((m) => m.UnitTwoModule) },
  { path: 'cli', loadChildren: () => import('./cli/cli.module').then((m) => m.CliModule) },
  { path: 'integrate', loadChildren: () => import('./integrate/integrate.module').then((m) => m.IntegrateModule) },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy', useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
