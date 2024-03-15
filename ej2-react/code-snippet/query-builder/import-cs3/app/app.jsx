import { QueryBuilderComponent, QueryLibrary } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';
QueryBuilderComponent.Inject(QueryLibrary);
// @ts-ignore
import { employeeData } from '../datasource.ts';
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
    
    function importMongo() {
        qryBldrObj.setMongoQuery('{"$and":[{"TaskID":1001},{ "$or":[{"Category":{"$regex":"Order"}}]}]}');
    }

    return (<div>
        <QueryBuilderComponent width='100%' dataSource={hardwareData} columns={columnData} ref={(scope) => { qryBldrObj = scope; }}/>
        <div className="e-qb-button">
            <ButtonComponent id="importSql" cssClass='e-primary' content='Set MongoDB Rules' onClick = {importMongo}/>
        </div>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('querybuilder'));
