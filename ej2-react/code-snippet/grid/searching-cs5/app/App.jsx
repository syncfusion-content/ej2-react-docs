import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Search, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const toolbarOptions = ['Search'];
    const searchOptions = {
        fields: ['CustomerID'],
        ignoreCase: true,
        key: 'Ha',
        operator: 'contains',
    };
    const clickHandler = () => {
        if (grid) {
            grid.searchSettings.key = '';
        }
    };
    return (<div>
    <ButtonComponent onClick={clickHandler}>Clear Search</ButtonComponent>
    <GridComponent dataSource={data} toolbar={toolbarOptions} searchSettings={searchOptions} height={260} ref={g => grid = g}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' width='100'/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/>
        </ColumnsDirective>
        <Inject services={[Search, Toolbar]}/>
    </GridComponent></div>);
}
export default App;
