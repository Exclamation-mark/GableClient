import { Component, OnInit } from '@angular/core';
import {GableBackendService} from '../../core/services/gable-backend.service';
import {ElectronService} from '../../core/services';

@Component({
  selector: 'app-host-setting',
  templateUrl: './host-setting.component.html',
  styles: [
  ]
})
export class HostSettingComponent implements OnInit {
  host = '';
  constructor(private gableBackendService: GableBackendService,
              private electronService: ElectronService) { }

  ngOnInit(): void {
    this.host = this.gableBackendService.getServer();
  }

  save() {
    const b = this.gableBackendService.setServer(this.host);
    if (b) {
      this.electronService.reload();
    }
  }
}
