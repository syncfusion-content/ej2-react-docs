import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const numericParams = { params: { decimals: 2 } };
    const ddParams = { params: { value: 'Germany' } };
    const verifiedParams = { params: { checked: true } };
    return <GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} height={265}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'/>
      <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' edit={numericParams} textAlign="Right"/>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' edit={ddParams} width='150'/>
      <ColumnDirective field='Verified' headerText='Verified' displayAsCheckBox={true} editType='booleanedit' edit={verifiedParams} width='150'/>
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]}/>
  </GridComponent>;
}
;
export default App;
