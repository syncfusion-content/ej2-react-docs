import * as React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { getComponent,  closest } from '@syncfusion/ej2-base';
import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuider';
import { QueryBuilder, ActionEventArgs, RuleModel } from '@syncfusion/ej2-querybuider';


export function PaymentTemplate(props) {
    let ds: string[] = ['Cash', 'Debit Card', 'Credit Card', 'Net Banking'];
    let qryBldrObj: QueryBuilderComponent;

    let state = Object.assign({}, props);
    qryBldrObj = getComponent(document.getElementById('querybuilder'), 'query-builder') as QueryBuilder;
    const args: ActionEventArgs = state;
    function paymentChange(event: any): void{
        const args: ActionEventArgs = state;
        let elem: HTMLElement = document.getElementById(args.ruleID).querySelector('.e-rule-value');
        qryBldrObj.notifyChange(event.value as string, elem, 'value');
    }

    return (<div >
        <DropDownListComponent  dataSource={ds}  value={args.rule.value} change={paymentChange}/>
        </div>
    );
}
