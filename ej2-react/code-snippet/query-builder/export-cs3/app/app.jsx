import { QueryBuilderComponent, QueryLibrary } from '@syncfusion/ej2-react-querybuilder';
import { AnimationSettingsModel, DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from 'react';
import * as ReactDom from 'react-dom';
QueryBuilderComponent.Inject(QueryLibrary);
// @ts-ignore
import { employeeData } from '../datasource.ts';
function App() {
    let qryBldrObj;
    let dialog;
    let animationSettings;
    let columnData = [
        { field: 'TaskID', label: 'Task ID', type: 'number' },
        { field: 'Name', label: 'Name', type: 'string' },
        { field: 'Category', label: 'Category', type: 'string' },
        { field: 'SerialNo', label: 'Serial No', type: 'string' },
        { field: 'InvoiceNo', label: 'Invoice No', type: 'string' },
        { field: 'Status', label: 'Status', type: 'string' }
    ];
    let importRules = {
        'condition': 'or',
        'rules': [{
            'label': 'Category',
            'field': 'Category',
            'type': 'string',
            'operator': 'equal',
            'value': 'Laptop'
        }]
    };
    let hardwareData  = [{
        'TaskID': 1,
        'Name': 'Lenovo Yoga',
        'Category': 'Laptop',
        'SerialNo': 'CB27932009',
        'InvoiceNo': 'INV-2878',
        'Status': 'Assigned'
    },
    {
        'TaskID': 2,
        'Name': 'Acer Aspire',
        'Category': 'Others',
        'SerialNo': 'CB35728290',
        'InvoiceNo': 'INV-3456',
        'Status': 'In-repair'
    },
    {
        'TaskID': 3,
        'Name': 'Apple MacBook',
        'Category': 'Laptop',
        'SerialNo': 'CB35628728',
        'InvoiceNo': 'INV-2763',
        'Status': 'In-repair'
    }];
    
    function getMongo() {
        dialog.content = qryBldrObj.getMongoQuery(qryBldrObj.getRules());
        dialog.show();
    }

    function getRule() {
        let validRule = qryBldrObj.getValidRules(qryBldrObj.rule);
         dialog.content = '<pre>' + JSON.stringify(validRule, null, 4) + '</pre>';
         dialog.show();
    }

    return (<div>
        <DialogComponent id='dialog' width='50%' animationSettings={animationSettings} header={"Query Builder"} visible={false} closeOnEscape={false} showCloseIcon={true} ref={(scope) => { dialog = scope; }}></DialogComponent>
        <QueryBuilderComponent width='100%' dataSource={hardwareData} columns={columnData} rule={importRules} ref={(scope) => { qryBldrObj = scope; }}/>
        <div className="e-qb-button">
            <ButtonComponent id="exportmongo" cssClass='e-primary' content='Get MongoDB' onClick = {getMongo}/>
            <ButtonComponent id="exportrule" cssClass='e-primary' content='Get Rule' onClick = {getRule}/>
        </div>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('querybuilder'));
