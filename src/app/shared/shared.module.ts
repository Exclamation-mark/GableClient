import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {PageNotFoundComponent} from './components/';
import {WebviewDirective} from './directives/';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';
// import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {MonacoEditorModule} from '@materia-ui/ngx-monaco-editor';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [CommonModule,
    TranslateModule,
    // NzCardModule,
    NzModalModule,
    NzResizableModule,
    NzTabsModule,
    NzSpinModule,
    NzIconModule,
    NzAlertModule,
    NzRadioModule,
    NzLayoutModule,
    NzGridModule,
    NzMessageModule,
    NzInputModule,
    MonacoEditorModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzDrawerModule,
    BrowserModule,
    NzDropDownModule,
    BrowserAnimationsModule,
    FormsModule],
  exports: [TranslateModule, WebviewDirective,
    NzLayoutModule,
    NzDrawerModule,
    NzDropDownModule,
    NzSpinModule,
    NzModalModule,
    NzIconModule,
    NzAlertModule,
    NzInputModule,
    NzMessageModule,
    MonacoEditorModule,
    NzResizableModule,
    NzTabsModule,
    NzRadioModule,
    NzGridModule,
    // NzCardModule,
    NzButtonModule,
    FormsModule]
})
export class SharedModule {
}
