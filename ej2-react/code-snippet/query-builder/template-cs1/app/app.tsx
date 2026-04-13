

import { QueryBuilderComponent, ColumnsDirective, ColumnDirective  } from '@syncfusion/ej2-react-querybuilder';
import { RuleModel } from '@syncfusion/ej2-querybuider';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { PaymentTemplate } from './payment-temp';
import { TransactionTemplate } from './transaction-temp';
function App() {
    let qryBldrObj: QueryBuilderComponent;
    let importRules: RuleModel = {
             'condition': 'and',
            'rules': [{
                'label': 'Transaction Type',
                'field': 'TransactionType',
                'type': 'string',
                'operator': 'equal',
                'value': 'Expense'
            },
            {
                'label': 'Payment Mode',
                'field': 'PaymentMode',
                'type': 'string',
                'operator': 'equal',
                'value': 'Cash'
            }]
    };
    function paymentTemplate(props) {
        return (<PaymentTemplate {...props}/>);
    }
    function transactionTemplate(props) {
        return (<TransactionTemplate {...props}/>);
    }
    return (<div>
        <QueryBuilderComponent width='100%' rule={importRules}  id='querybuilder'  >
            <ColumnsDirective>
                <ColumnDirective field="Category" label="Category" type="string"/>
                <ColumnDirective field="PaymentMode" label="PaymentMode" type="string" template = {paymentTemplate}/>
                <ColumnDirective field="TransactionType" label="TransactionType" type="string" template = {transactionTemplate}/>
                <ColumnDirective field="Description" label="Description" type="string"/>
                <ColumnDirective field="Date" label="Date" type="string"/>
                <ColumnDirective field="Amount" label="Amount" type="string"/>
            </ColumnsDirective>
        </QueryBuilderComponent>
    </div>);
}
export default App;
ReactDom.render(<App />,document.getElementById('querybuilder-component'));


