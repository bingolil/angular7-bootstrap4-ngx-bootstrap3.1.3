import { BaseControl } from './base-control';

export class InputEmail extends BaseControl<string> {
  /** 控件类型 */
  controlType = 'inputEmail';
  /** 默认初始值 */
  value = '';

  constructor(options: {} = {}) {
    super(options);
  }
}
