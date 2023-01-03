import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Inject, Toolbar, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { MaskedTextBox } from '@syncfusion/ej2-inputs';
import { data } from './datasource';
function App() {
    let grid;
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    let element;
    let maskObj;
    const create = () => {
        element = document.createElement('input');
        return element;
    };
    const destroy = () => {
        maskObj.destroy();
    };
    const read = () => {
        return maskObj.value;
    };
    const write = (args) => {
        maskObj = new MaskedTextBox({
            mask: "0-0-0-0",
            value: args.rowData.Mask
        });
        maskObj.appendTo(element);
    };
    const params = {
        create: create,
        destroy: destroy,
        read: read,
        write: write
    };
    return (<GridComponent dataSource={data} allowPaging={true} editSettings={editOptions} toolbar={toolbarOptions} ref={(g) => (grid = g)} height={250}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' type='number' textAlign="Right" isPrimaryKey={true} width="100"/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' type='string' width="120"/>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width="120" type='string'/>
      <ColumnDirective field='Mask' headerText='Mask' type='string' width="140" edit={params}/>
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar, Page]}/>
  </GridComponent>);
}
;
export default App;
