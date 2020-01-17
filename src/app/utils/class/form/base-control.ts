/** 用于动态表单的表单控件基类 */
export class BaseControl<T> {
  /** 具体的值 */
  value: T;
  /** 响应式表单绑定的属性 */
  key: string;
  /** 控件描述 */
  label: string;
  /** 是否必须 */
  required: boolean;
  /** 控件类型 */
  controlType: string;
  /** 占位内容 */
  placeholder: string;
  /** 是否不可用 */
  disabled: boolean;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    controlType?: string,
    placeholder?: string,
    disabled?: boolean
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.controlType = options.controlType || '';
    this.placeholder = options.placeholder || '';
    this.disabled = !!options.disabled;
  }

}
