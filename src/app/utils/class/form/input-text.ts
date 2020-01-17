import { BaseControl } from './base-control';

/** 单行文本输入框 */
export class InputText extends BaseControl<string> {
  /** 控件类型 */
  controlType = 'inputText';
  /** 只读 */
  readonly: boolean;

  constructor(options: {} = {}) {
    super(options);
    this.readonly = !!options['readonly'];
  }
}
