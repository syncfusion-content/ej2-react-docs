

import { ColumnsModel, QueryBuilderComponent, RuleModel } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { employeeData } from '../datasource.ts';

function App() {
    let qryBldrObj: QueryBuilderComponent;
    let dateOperators = [
        { value: 'equal', key: 'Equal' },
        { value: 'greaterthan', key: 'Greater Than' },
        { value: 'greaterthanorequal', key: 'Greater Than Or Equal' },
        { value: 'lessthan', key: 'Less Than' },
        { value: 'lessthanorequal', key: 'Less Than Or Equal' },
        { value: 'notequal', key: 'Not Equal' },
        { value: 'between', key: 'Between' },
        { value: 'notbetween', key: 'Not Between' }
      ];
      let boolOperators: any = [
        { value: 'equal', key: 'Equal' },
      ];
    let columnData: ColumnsModel[] = [
        { field: "EmployeeID", label: "Employee ID", type: "number" },
        { field: "FirstName", label: "First Name", type: "string" },
        { field: "LastName", label: "Last Name", type: "string" },
        { field: "Age", label: "Age", type: "number" },
        { field: "IsDeveloper", label: "Is Developer", type: "boolean", operators: boolOperators },
        { field: "PrimaryFramework", label: "Primary Framework", type: "string" },
        { field: "HireDate", label: "Hire Date", type: "date", format: "MM/dd/yyyy", operators: dateOperators },
        { field: "Country", label: "Country", type: "string" }
    ];
    let importRules: RuleModel = {
        condition: "",
        rules: [
            { label: "First Name", field: "FirstName", type: "string", operator: "startswith", value: "Andre", condition: "and" },
            { label: "Last Name", field: "LastName", type: "string", operator: "in", value: ['Davolio', 'Buchanan'], condition: "or" },
            { label: "Age", field: "Age", type: "number", operator: "greaterthan", value: 29, condition: "and" },
            {
                condition: "or", rules: [
                    { label: "Is Developer", field: "IsDeveloper", type: "boolean", operator: "equal", value: true, condition: "and" },
                    { label: "Primary Framework", field: "PrimaryFramework", type: "string", operator: "equal", value: "React" }
                ]
            },
            { label: "Hire Date", field: "HireDate", type: "date", operator: "between", value: ["11/22/2023", "11/30/2023"] },
        ]
    };

    return (
        <div>
            <QueryBuilderComponent width='100%' dataSource={employeeData} ref={(scope) => { qryBldrObj = scope as QueryBuilderComponent; }} columns={columnData} rule={importRules} enableSeparateConnector={true}/>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('querybuilder'));


