import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Filter, Inject, Page } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    const clickHandler = () => {
        grid = `OrderDetails` + Math.floor(Math.random() * 10);
        location.reload();
    }
    return (<div> <ButtonComponent onClick={clickHandler}>Restore to initial state</ButtonComponent>
        <GridComponent id="Grid" dataSource={data} allowFiltering={true} allowPaging={true} enablePersistence={true} height={230}
            ref={g => grid = g}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
                <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
            </ColumnsDirective>
            <Inject services={[Filter, Page]} />
        </GridComponent></div>)
};
export default App;