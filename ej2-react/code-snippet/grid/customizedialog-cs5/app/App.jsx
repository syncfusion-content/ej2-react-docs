import { getValue } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const editOptions = { allowEditing: true };
    const toolbarOptions = ['Edit', 'Update', 'Cancel'];
    const actionBegin = (args) => {
        if (args.requestType === 'beginEdit') {
            if (getValue('ShipCountry', args.rowData) === "France") {
                args.cancel = true;
            }
        }
    };
    return <GridComponent dataSource={data} actionBegin={actionBegin} editSettings={editOptions} toolbar={toolbarOptions} height={265}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'/>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]}/>
  </GridComponent>;
}
;
export default App;
