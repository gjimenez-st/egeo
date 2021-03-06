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
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ 'name': 'stObjectToArray' })
export class StObjectToArrayPipe implements PipeTransform {
   transform (obj: any): {key: string, value: any}[] {
      return obj ? Object.keys(obj).map(key => ({key, value: obj[key]})) : [];
   }
}
