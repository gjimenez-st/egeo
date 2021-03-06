/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { StTab } from './st-tab-box.interface';

@Component({
   selector: 'st-tab-box',
   templateUrl: './st-tab-box.component.html',
   styleUrls: ['./st-tab-box.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StTabBoxComponent {
   @Input() tabs: StTab[] = [];
   @Input() qaTag: string;
   @Output() select: EventEmitter<StTab> = new EventEmitter<StTab>();

   constructor(private _cd: ChangeDetectorRef) { }

   onClick(selectedTab: StTab): void {
      this.tabs = Object.assign([], this.tabs.map((tab) => {
         if (tab.label === selectedTab.label) {
            return Object.assign({}, tab, { active: true });
         } else {
            return Object.assign({}, tab, { active: false });
         }
      }));
      this._cd.markForCheck();
      this.select.emit(Object.assign({}, selectedTab, { active: true }));
   }

   getTabWidth(): string {
      return `${(100 / this.tabs.length).toFixed(2)}%`;
   }

   getTabClass(tab: StTab, i: number): string {
      let classes: string = tab.active ? 'st-tab-box__tab--active sth-tab-box__tab--active' : '';
      classes += i === 0 && !tab.active ? ' sth-tab-box-right-shadow' : '';
      classes += i !== 0 && !tab.active ? ' sth-tab-box-left-shadow' : '';
      return classes.trim();
   }
}
