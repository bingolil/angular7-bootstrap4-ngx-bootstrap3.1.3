import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  constructor() { }

  tooltip(arr: Array<{ bool: boolean, toolText: string }>): string {
    for (const item of arr) {
      if (item.bool) {
        return item.toolText;
      }
    }
  }

}
