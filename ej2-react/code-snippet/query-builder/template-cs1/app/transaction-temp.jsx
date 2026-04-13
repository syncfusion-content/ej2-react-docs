import * as React from 'react';
import { getComponent } from '@syncfusion/ej2-base';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
export function TransactionTemplate(props) {
    let qryBldrObj;
    let state = Object.assign({}, props);
    qryBldrObj = getComponent(document.getElementById('querybuilder'), 'query-builder');
    const args = state;
    function transactionChange(event) {
        const args = state;
        let elem = document.getElementById(args.ruleID).querySelector('.e-rule-value');
        qryBldrObj.notifyChange(event.checked === true ? 'Expense' : 'Income', elem, 'value');
    }
    return (<div>
            <CheckBoxComponent label="Is Expense" checked={args.rule.value} change={transactionChange}/>     
        </div>);
}
