import { BaseControl } from './base-control';

/** select下拉框 */
export class SelectDropdown extends BaseControl<string> {
  /** 控件类型 */
  controlType = 'selectDropdown';
  /** 下拉框的值 */
  options: { key: string, vlaue: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
