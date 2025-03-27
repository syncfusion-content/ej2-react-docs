import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnsModel, QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { employeeData } from './datasource';

function App() {
    let qryBldrObj: QueryBuilderComponent;

    let columnData: ColumnsModel[] = [
        { field: 'EmployeeID', label: 'EmployeeID', type: 'number', validation: { isRequired: true } },
        { field: 'FirstName', label: 'FirstName', type: 'string' },
        { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.'] },
        { field: 'Title', label: 'Title', type: 'string' },
        { field: 'HireDate', format: 'dd/MM/yyyy', label: 'HireDate', type: 'date' },
        { field: 'Country', label: 'Country', type: 'string' },
        { field: 'City', label: 'City', type: 'string' }
    ];

    function onClick(): void {
        qryBldrObj.validateFields();
    }

    return (
        <div>
            <QueryBuilderComponent width='100%' dataSource={employeeData} columns={columnData} allowValidation={true} ref={(scope) => { qryBldrObj = scope as QueryBuilderComponent; }}/>
            <div className="e-qb-button">
                <ButtonComponent id="validatebtn" cssClass='e-primary' content='Validate Fields' onClick = {onClick} />
            </div>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('querybuilder'));
