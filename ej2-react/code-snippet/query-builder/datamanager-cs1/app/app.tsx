{% raw %}


import { DataManager, Query } from '@syncfusion/ej2-data';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnsModel, QueryBuilderComponent, RuleModel } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import { useState } from "react";
import * as ReactDom from 'react-dom';
// @ts-ignore
import { hardwareData } from '../datasource.ts';

function App() {
    let qryBldrObj: QueryBuilderComponent;
    let columnData: ColumnsModel[] = [
        { field: 'TaskID', label: 'Task ID', type: 'number' },
        { field: 'Name', label: 'Name', type: 'string' },
        { field: 'Category', label: 'Category', type: 'string' },
        { field: 'SerialNo', label: 'Serial No', type: 'string' },
        { field: 'InvoiceNo', label: 'Invoice No', type: 'string' },
        { field: 'Status', label: 'Status', type: 'string' }
    ];
    let importRules: RuleModel = {
        'condition': 'or',
        'rules': [{
            'field': 'TaskID',
            'label': 'Task ID',
            'operator': 'equal',
            'type': 'number',
            'value': 1
        }]
    };
    const [state, setState] = useState({
        result: [],
        style: {display: 'none'}
    });

    function onClick(): void {
        const validRule = qryBldrObj.getValidRules(qryBldrObj.rule);
        const dataManagerQuery = new Query().select(['TaskID', 'Category', 'Status']).where(qryBldrObj.getPredicate(validRule)).take(8);
        setState({result: new DataManager(hardwareData).executeLocal(dataManagerQuery), style: {display: 'block'}});
    }

    return (
        <div>
            <QueryBuilderComponent width='100%' dataSource={hardwareData} columns={columnData}  rule={importRules}
                ref={(scope) => { qryBldrObj = scope as QueryBuilderComponent; }}/>
            <div className="e-qb-button">
                <ButtonComponent id="getdata" cssClass='e-primary' content='get data' onClick = {onClick} />
            </div>
            <table id="datatable" className="e-table" style={state.style}>
                <thead>
                    <tr><th>TaskID</th><th>Category</th><th>Status</th></tr>
                </thead>
                <tbody>{state.result.map(function func(item, key) {
                    return (
                        <tr key = {key}>
                            <td>{item.TaskID}</td>
                            <td>{item.Category}</td>
                            <td>{item.Status}</td>
                        </tr>
                    )
                })}</tbody>
            </table>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('querybuilder'));


{% endraw %}