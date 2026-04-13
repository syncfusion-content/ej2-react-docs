import * as React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { getComponent } from '@syncfusion/ej2-base';
export function PaymentTemplate(props) {
    let ds = ['Cash', 'Debit Card', 'Credit Card', 'Net Banking'];
    let qryBldrObj;
    let state = Object.assign({}, props);
    qryBldrObj = getComponent(document.getElementById('querybuilder'), 'query-builder');
    const args = state;
    function paymentChange(event) {
        const args = state;
        let elem = document.getElementById(args.ruleID).querySelector('.e-rule-value');
        qryBldrObj.notifyChange(event.value, elem, 'value');
    }
    return (<div>
        <DropDownListComponent dataSource={ds} value={args.rule.value} change={paymentChange}/>
        </div>);
}
