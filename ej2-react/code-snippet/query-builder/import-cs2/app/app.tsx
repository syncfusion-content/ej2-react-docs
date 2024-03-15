

import { ColumnsModel, QueryBuilderComponent, QueryLibrary } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
QueryBuilderComponent.Inject(QueryLibrary);
// @ts-ignore

function App() {
    let qryBldrObj: QueryBuilderComponent;
    let hardwareData: Object[]  = [{
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
    let columnData: ColumnsModel[] = [
        { field: 'TaskID', label: 'Task ID', type: 'number' },
        { field: 'Name', label: 'Name', type: 'string' },
        { field: 'Category', label: 'Category', type: 'string' },
        { field: 'SerialNo', label: 'Serial No', type: 'string' },
        { field: 'InvoiceNo', label: 'Invoice No', type: 'string' },
        { field: 'Status', label: 'Status', type: 'string' }
    ];

    function importSql(): void {
        qryBldrObj.setParameterizedNamedSql({ sql: '(Category IN (:Category_1,:Category_2) OR TaskID IN (:TaskID_1,:TaskID_2))', params: {"Category_1": "Laptop", "Category_2": "Others", "TaskID_1": 1, "TaskID_2": 2} });
    }

    return (
        <div>
            <QueryBuilderComponent width='100%' dataSource={hardwareData} columns={columnData} />
            <div className="e-qb-button">
                <ButtonComponent id="clonegroup" cssClass='e-primary' content='Set Named Parameter SQL Rules' onClick = {importSql}/>
            </div>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('querybuilder'));


