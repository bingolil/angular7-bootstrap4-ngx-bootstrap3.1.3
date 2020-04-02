import { BaseControl } from './base-control';

export class CheckboxGroup extends BaseControl<string[]> {
    /** 控件类型 多选checkbox组 */
    controlType = 'checkboxGroup';
    /** 可选数据 */
    checkboxList: { label: string, value: string }[] = [];
    /** 页面中展示的可选列表属性 */
    ngxDisplay: string;
    /** 页面绑定的值的可选列表属性 */
    ngxValue: any;

    constructor(options: {} = {}) {
        super(options);
        this.checkboxList = options['checkboxList'] || [];
        this.ngxDisplay = options['ngxDisplay'];
        this.ngxValue = options['ngxValue'];
    }
}
