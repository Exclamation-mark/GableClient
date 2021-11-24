import { Component, OnInit } from '@angular/core';
import {NzTabNavItemDirective} from "ng-zorro-antd/tabs/tab-nav-item.directive";

@Component({
  selector: 'app-unit-index',
  templateUrl: './unit-index.component.html',
  styles: [`
    .app-layout {
      height: 100vh;
    }
    .app-layout .menu-sidebar {
      position: relative;
      z-index: 10;
      min-height: 100vh;
      box-shadow: 2px 0 6px rgba(0,21,41,0.35);
    }
    ::ng-deep .app-layout .menu-sidebar .ant-menu-inline {
      border-right: none;
    }
    .app-layout .sidebar-logo {
      position: relative;
      height: 64px;
      padding-left: 24px;
      overflow: hidden;
      line-height: 64px;
      transition: all .3s;
    }
    .app-layout .sidebar-logo img {
      display: inline-block;
      height: 32px;
      width: 32px;
      vertical-align: middle;
    }
    .app-layout .sidebar-logo h1 {
      display: inline-block;
      margin: 0 0 0 20px;
      font-weight: 600;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }

    nz-content {
      background-color: pink;
    }

    nz-sider {
      background: rgb(240, 242, 245);
    }
    nz-content .inner-content {
      padding: 24px;
      height: 100%;
    }
  `]
})
export class UnitIndexComponent implements OnInit {
  hiddenItems: NzTabNavItemDirective[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  add() {
  }
}
