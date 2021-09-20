import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitIndexComponent } from './unit-index/unit-index.component';
import {UnitRoutingModule} from './unit-routing.module';
import {SharedModule} from '../shared/shared.module';
import { UnitDashboardComponent } from './unit-dashboard/unit-dashboard.component';
import { DefaultTestComponent } from './default-test/default-test.component';
@NgModule({
  declarations: [
    UnitIndexComponent,
    UnitDashboardComponent,
    DefaultTestComponent
  ],
  imports: [
    CommonModule, UnitRoutingModule, SharedModule
  ]
})
export class UnitModule { }
