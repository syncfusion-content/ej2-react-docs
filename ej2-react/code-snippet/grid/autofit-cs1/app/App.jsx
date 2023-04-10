import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Resize } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    return <GridComponent dataSource={data} height={400} width={850} allowResizing={true} autoFit={true}>
        <Inject services={[Resize]}/>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' minWidth='100' width='150' maxWidth='200' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='CustomerID' headerText='Customer ID' minWidth='8' width='150'></ColumnDirective>
            <ColumnDirective field='Freight' headerText='Freight' minWidth='8' width='120' format='C2' textAlign='Right'/>
            <ColumnDirective field='ShipCity' headerText='Ship City' allowResizing={false} width='150' textAlign='Right'/>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' minWidth='8' width='150'></ColumnDirective>
        </ColumnsDirective>
    </GridComponent>;
};
export default App;