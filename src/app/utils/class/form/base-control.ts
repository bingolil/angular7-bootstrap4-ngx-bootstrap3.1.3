/** 用于动态表单的表单控件基类 */
export class BaseControl<T> {
  value: T;
  key: string;
  /** 控件描述 */
  label: string;
  /** 是否必须 */
  required: boolean;
  /** 控件类型 */
  controlType: string;
  /** 占位内容 */
  placeholder: string;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    controlType?: string,
    placeholder?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.controlType = options.controlType || '';
    this.placeholder = options.placeholder || '';
  }

}
