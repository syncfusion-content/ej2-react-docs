

import { getValue } from '@syncfusion/ej2-base';
import { Column, ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data as datasource } from './datasource';

function App() {
    const currencyFormatter = (field: string, data: object, column: Column) => {
        return '€' + getValue('Freight', data);
    }
    const valueAccess = (field: string, data: object, column: Column) => {
        return data[field] + '-' + getValue('ShipRegion', data);
    }
    return (<div>
        <GridComponent dataSource={datasource} height={315} >
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
                <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right" />
                <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" valueAccessor={currencyFormatter} />
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' valueAccessor={valueAccess} />
            </ColumnsDirective>
        </GridComponent>
    </div>)
};
export default App;


