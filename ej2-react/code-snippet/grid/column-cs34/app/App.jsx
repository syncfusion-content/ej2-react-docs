import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Filter, Inject, Page } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const clickHandler = () => {
        grid.enablePersistence = false;
        window.localStorage.setItem("gridGrid", "");
        grid.destroy();
        //reloads the page
        location.reload();
    };
    return (<div> <ButtonComponent onClick={clickHandler}>Restore to initial state</ButtonComponent> <GridComponent id="Grid" dataSource={data} allowFiltering={true} allowPaging={true} enablePersistence={true} height={230} ref={g => grid = g}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' width='100'/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/>
        </ColumnsDirective>
        <Inject services={[Filter, Page]}/>
    </GridComponent></div>);
}
;
export default App;
