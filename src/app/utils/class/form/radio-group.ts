import { BaseControl } from './base-control';

export class RadioGroup extends BaseControl<string> {
    /** 控件类型 单选框 */
    controlType = 'radioGroup';
    /** 可选数据 */
    radioList: { label: string, value: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.radioList = options['radioList'] || [];
    }
}
