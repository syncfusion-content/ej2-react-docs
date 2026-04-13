import * as React from 'react';
import { getComponent,  closest } from '@syncfusion/ej2-base';
import { CheckBoxComponent, ButtonComponent} from '@syncfusion/ej2-react-buttons';
import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuider';
import { QueryBuilder, ActionEventArgs, RuleModel } from '@syncfusion/ej2-querybuider';


export function TransactionTemplate(props) {
    let qryBldrObj: QueryBuilderComponent;

    let state = Object.assign({}, props);
    qryBldrObj = getComponent(document.getElementById('querybuilder'), 'query-builder') as QueryBuilder;
    const args: ActionEventArgs = state;
    function transactionChange(event: any): void{
        const args: ActionEventArgs = state;
        let elem: HTMLElement = document.getElementById(args.ruleID).querySelector('.e-rule-value');
        qryBldrObj.notifyChange(event.checked === true ? 'Expense' : 'Income', elem, 'value');
    }

    return (<div>
            <CheckBoxComponent  label="Is Expense" checked={args.rule.value}  change={transactionChange}/>     
        </div>
    );
}
