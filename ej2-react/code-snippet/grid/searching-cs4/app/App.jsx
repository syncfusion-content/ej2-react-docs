import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const searchSettings = {
        fields: ['CustomerID', 'Freight', 'ShipCountry']
    };
    return (<div>
        <GridComponent dataSource={data} height={280} toolbar={['Search']} searchSettings={searchSettings}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
                <ColumnDirective field='Freight' headerText='Freight' width='100' format='C' textAlign="Right" />
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
            </ColumnsDirective>
            <Inject services={[Toolbar]} />
        </GridComponent>
    </div>);
};
export default App;