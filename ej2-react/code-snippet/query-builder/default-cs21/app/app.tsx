import { getComponent } from '@syncfusion/ej2-base';
import { ChangeEventArgs, DropDownList, MultiSelect, MultiSelectChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { ColumnsModel, QueryBuilderComponent, RuleModel } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { expenseData } from './datasource';

function App() {
    let qryBldrObj: QueryBuilderComponent;
    let elem: HTMLElement;
    let dropDownObj: DropDownList;
    let multiSelectObj: MultiSelect;
    let inOperators: string [] = ['in', 'notin'];
    let filter: ColumnsModel[] = [
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
                destroy: (args: { elementId: string }) => {
                    multiSelectObj = getComponent(document.getElementById(args.elementId) as HTMLElement, 'multiselect') as MultiSelect;
                    if (multiSelectObj) {
                        multiSelectObj.destroy();
                    }
                    dropDownObj = getComponent(document.getElementById(args.elementId) as HTMLElement, 'dropdownlist') as DropDownList;
                    if (dropDownObj) {
                        dropDownObj.destroy();
                    }
                },
                write: (args: { elements: Element, values: string[] | string, operator: string }) => {
                    const ds = ['Cash', 'Debit Card', 'Credit Card', 'Net Banking', 'Wallet'];
                    if (inOperators.indexOf(args.operator) > -1) {
                        multiSelectObj = new MultiSelect({
                            change: (e: MultiSelectChangeEventArgs) => {
                                qryBldrObj.notifyChange(e.value as string[], e.element);
                            },
                            dataSource: ds,
                            mode: 'CheckBox',
                            placeholder: 'Select Transaction',
                            value: args.values as string []
                        });
                        multiSelectObj.appendTo('#' + args.elements.id);
                    } else {
                        dropDownObj = new DropDownList({
                            change: (e: ChangeEventArgs) => {
                                qryBldrObj.notifyChange(e.itemData.value as string, e.element);
                            },
                            dataSource: ds,
                            value: args.values ? args.values as string : ds[0]
                        });
                        dropDownObj.appendTo('#' + args.elements.id);
                    }
                }
            }, type: 'string'
        },
        { field: 'Description', label: 'Description', type: 'string' },
        { field: 'Date', label: 'Date', type: 'date' }
    ];

    let importRules: RuleModel = {
            'condition': 'or',
            'rules': [{
                'field': 'PaymentMode',
                'label': 'PaymentMode',
                'operator': 'equal',
                'type': 'string',
                'value': 'Cash'
            }]
    };

    return (
        <QueryBuilderComponent dataSource={expenseData} columns={filter} width='100%' rule={importRules} ref={(scope) => { qryBldrObj = scope as QueryBuilderComponent; }} />
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('querybuilder'));