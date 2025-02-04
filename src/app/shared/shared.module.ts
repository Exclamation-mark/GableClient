import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {PageNotFoundComponent} from './components/';
import {WebviewDirective} from './directives/';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzResizableModule} from 'ng-zorro-antd/resizable';
import {NzEmptyModule} from 'ng-zorro-antd/empty';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzAlertModule} from 'ng-zorro-antd/alert';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
// import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {MonacoEditorModule} from '@materia-ui/ngx-monaco-editor';
import {NzInputModule} from 'ng-zorro-antd/input';
import {AddGroupOrUnitTestComponent} from './add-group-or-unit-test/add-group-or-unit-test.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import {NgTerminalModule} from 'ng-terminal';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, AddGroupOrUnitTestComponent],
  imports: [CommonModule,
    TranslateModule,
    // NzCardModule,
    NzModalModule,
    NzResizableModule,
    DragDropModule,
    NzTabsModule,
    NzSpinModule,
    NzIconModule,
    NzAlertModule,
    NzTableModule,
    NzRadioModule,
    NzTagModule,
    NzFormModule,
    NzProgressModule,
    NzUploadModule,
    NgTerminalModule,
    NzLayoutModule,
    NzInputNumberModule,
    NzCheckboxModule,
    NzTypographyModule,
    NzSelectModule,
    NzCollapseModule,
    NzGridModule,
    NzMessageModule,
    NzInputModule,
    NzToolTipModule,
    NzPopconfirmModule,
    MonacoEditorModule,
    NzEmptyModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzDrawerModule,
    NzDropDownModule,
    FormsModule,
    NzStepsModule,
    ReactiveFormsModule
  ],
  exports: [TranslateModule, WebviewDirective,
    NzLayoutModule,
    NzDrawerModule,
    NzDropDownModule,
    NzProgressModule,
    NzTagModule,
    NzTableModule,
    NzSpinModule,
    NzModalModule,
    NzIconModule,
    NzCollapseModule,
    NzAlertModule,
    NzToolTipModule,
    NzPopconfirmModule,
    NgTerminalModule,
    NzUploadModule,
    NzCheckboxModule,
    NzFormModule,
    NzEmptyModule,
    NzInputModule,
    NzTypographyModule,
    NzSelectModule,
    NzStepsModule,
    NzInputNumberModule,
    NzMessageModule,
    DragDropModule,
    MonacoEditorModule,
    NzResizableModule,
    NzTabsModule,
    NzPageHeaderModule,
    NzRadioModule,
    NzGridModule,
    // NzCardModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AddGroupOrUnitTestComponent
  ]
})
export class SharedModule {
}
