{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { hardwareData } from './datasource';
function App() {
    let qryBldrObj;
    let dialogInstance;
    let animationSettings = { effect: 'Zoom', duration: 400, delay: 0 };
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
                'field': 'Category',
                'label': 'Category',
                'operator': 'equal',
                'type': 'string',
                'value': 'Laptop'
            }]
    };
    function getSql() {
        dialogInstance.content = qryBldrObj.getSqlFromRules(qryBldrObj.getRules());
        dialogInstance.show();
    }
    function getRule() {
        const validRule = qryBldrObj.getValidRules(qryBldrObj.rule);
        dialogInstance.content = '<pre>' + JSON.stringify(validRule, null, 4) + '</pre>';
        dialogInstance.show();
    }
    return (<div>
            <QueryBuilderComponent width='100%' dataSource={hardwareData} ref={(scope) => { qryBldrObj = scope; }} columns={columnData} rule={importRules}/>
            <div className="e-qb-button">
                <ButtonComponent cssClass='e-primary' content='Get Sql' onClick={getSql}/>
                <ButtonComponent cssClass='e-primary' content='Get Rule' onClick={getRule}/>
            </div>
            <DialogComponent id="defaultdialog" showCloseIcon={true} animationSettings={animationSettings} ref={dialog => dialogInstance = dialog} height='auto' header='Querybuilder' visible={false} width='50%'/>
        </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('querybuilder'));
{% endraw %}