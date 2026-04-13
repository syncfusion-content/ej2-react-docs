{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { hardwareData } from './datasource';
function App() {
    let qryBldrObj;
    let columnData = [
        { field: 'TaskID', label: 'Task ID', type: 'number' },
        { field: 'Name', label: 'Name', type: 'string' },
        { field: 'Category', label: 'Category', type: 'string' },
        { field: 'SerialNo', label: 'Serial No', type: 'string' },
        { field: 'InvoiceNo', label: 'Invoice No', type: 'string' },
        { field: 'Status', label: 'Status', type: 'string' }
    ];
    function importRule() {
        qryBldrObj.setRulesFromSql("TaskID = 1 and Status LIKE ('Assigned%')");
    }
    return (<div>
            <QueryBuilderComponent width='100%' dataSource={hardwareData} ref={(scope) => { qryBldrObj = scope; }} columns={columnData}/>
            <div className="e-qb-button">
                <ButtonComponent id="importrules" cssClass='e-primary' content='set Rules' onClick={importRule}/>
            </div>
        </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('querybuilder'));
{% endraw %}