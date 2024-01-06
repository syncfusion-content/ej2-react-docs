import * as React from 'react';
import * as ReactDom from 'react-dom';
import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
function App() {
    let data = new DataManager({
        url: 'https://services.odata.org/v4/Northwind/Northwind.svc/Employees/',
        adaptor: new ODataV4Adaptor(),
    });
    let columnData = [
        { field: 'EmployeeID', label: 'EmployeeID', type: 'number' },
        { field: 'FirstName', label: 'FirstName', type: 'string' },
        { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.'] },
        { field: 'Title', label: 'Title', type: 'string' },
        { field: 'HireDate', label: 'HireDate', type: 'date', format: 'dd/MM/yyyy' },
        { field: 'Country', label: 'Country', type: 'string' },
        { field: 'City', label: 'City', type: 'string' }
    ];
    let importRules = {
        'condition': 'and',
        'rules': [{
                'label': 'EmployeeID',
                'field': 'EmployeeID',
                'type': 'number',
                'operator': 'equal',
                'value': 1
            },
            {
                'label': 'Title',
                'field': 'Title',
                'type': 'string',
                'operator': 'equal',
                'value': 'Sales Manager'
            }]
    };
    return (<QueryBuilderComponent width='100%' dataSource={data} columns={columnData} rule={importRules}></QueryBuilderComponent>);
}
export default App;
ReactDom.render(<App />, document.getElementById('querybuilder'));
