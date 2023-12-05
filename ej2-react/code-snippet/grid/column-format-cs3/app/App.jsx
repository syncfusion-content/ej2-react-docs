import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    return <GridComponent dataSource={data}>
        <ColumnsDirective>
            <ColumnDirective field='RollNo' headerText='RollNo' width='120' textAlign="Right" />
            <ColumnDirective field='Mark1' headerText='Mark1' width='120' />
            <ColumnDirective field='Mark2' headerText='Mark2' width='120' format="N" textAlign="Right" />
            <ColumnDirective field='Average' headerText='Average' width='120' textAlign="Right" />
            <ColumnDirective field='Percentage' headerText='Percentage' width='120' format="P" />
            <ColumnDirective field='Fees' headerText='Fees' width='120' format='C' />
        </ColumnsDirective>
    </GridComponent>
};
export default App;