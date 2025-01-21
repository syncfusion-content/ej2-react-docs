{% raw %}
import { getComponent } from '@syncfusion/ej2-base';
import { DropDownList, MultiSelect } from '@syncfusion/ej2-react-dropdowns';
import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { expenseData } from './datasource.ts';
function App() {
    let qryBldrObj;
    let elem;
    let dropDownObj;
    let multiSelectObj;
    let inOperators = ['in', 'notin'];
    let filter = [
        {
            field: 'PaymentMode', label: 'Payment Mode', operators: [
                { key: 'Equal', value: 'equal' },
                { key: 'Not Equal', value: 'notequal' },
                { key: 'In', value: 'in' },
                { key: 'Not In', value: 'notin' }
            ], template: {
                create: () => {
                    elem = document.createElement('input');
                    elem.setAttribute('type', 'text');
                    return elem;
                },
                destroy: (args) => {
                    multiSelectObj = getComponent(document.getElementById(args.elementId), 'multiselect');
                    if (multiSelectObj) {
                        multiSelectObj.destroy();
                    }
                    dropDownObj = getComponent(document.getElementById(args.elementId), 'dropdownlist');
                    if (dropDownObj) {
                        dropDownObj.destroy();
                    }
                },
                write: (args) => {
                    const ds = ['Cash', 'Debit Card', 'Credit Card', 'Net Banking', 'Wallet'];
                    if (inOperators.indexOf(args.operator) > -1) {
                        multiSelectObj = new MultiSelect({
                            change: (e) => {
                                qryBldrObj.notifyChange(e.value, e.element);
                            },
                            dataSource: ds,
                            mode: 'CheckBox',
                            placeholder: 'Select Transaction',
                            value: args.values
                        });
                        multiSelectObj.appendTo('#' + args.elements.id);
                    }
                    else {
                        dropDownObj = new DropDownList({
                            change: (e) => {
                                qryBldrObj.notifyChange(e.itemData.value, e.element);
                            },
                            dataSource: ds,
                            value: args.values ? args.values : ds[0]
                        });
                        dropDownObj.appendTo('#' + args.elements.id);
                    }
                }
            }, type: 'string'
        },
        { field: 'Description', label: 'Description', type: 'string' },
        { field: 'Date', label: 'Date', type: 'date' }
    ];
    let importRules = {
        'condition': 'or',
        'rules': [{
                'field': 'PaymentMode',
                'label': 'PaymentMode',
                'operator': 'equal',
                'type': 'string',
                'value': 'Cash'
            }]
    };
    return (<QueryBuilderComponent dataSource={expenseData} columns={filter} width='100%' rule={importRules} ref={(scope) => { qryBldrObj = scope; }}/>);
}
export default App;
ReactDom.render(<App />, document.getElementById('querybuilder'));
{% endraw %}