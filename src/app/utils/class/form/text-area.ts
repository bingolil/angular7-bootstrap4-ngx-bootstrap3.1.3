import { BaseControl } from './base-control';

/** 多行文本输入框控件 */
export class TextArea extends BaseControl<string> {
  /** 控件类型 */
  controlType = 'textarea';
  /*** 最低行高 */
  minRows: number;
  /** 默认值为'' */
  value = '';
  /** 只读 */
  readonly: boolean;

  constructor(options: {} = {}) {
    super(options);
    this.minRows = options['minRow'] || 3;
    this.readonly = !!options['readonly'];
  }
}
