import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { stringData } from './datasource';
function App() {
    const valueAccess = (field, data, column) => {
        return data[field].map((s) => {
            return s.LastName || s.FirstName;
        }).join(' ');
    };
    return (<div>
        <GridComponent dataSource={stringData} height={315}>
            <ColumnsDirective>
                <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right"/>
                <ColumnDirective field='Name' headerText='Full Name' width='120' valueAccessor={valueAccess}/>
                <ColumnDirective field='Title' headerText='Title' width='160' textAlign="Right"/>
            </ColumnsDirective>
        </GridComponent>
    </div>);
}
;
export default App;
