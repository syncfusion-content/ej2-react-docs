import { ColumnDirective, ColumnsDirective, Edit } from '@syncfusion/ej2-react-grids';
import { GridComponent, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from "react";
import { data } from './datasource';
import { DialogFormTemplate } from './wizardTab';
function App() {
    const dialogTemplate = (props) => {
        const a = [props, grid];
        return (<DialogFormTemplate {...a}/>);
    };
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: dialogTemplate };
    const toolbarOptions = ['Add', 'Edit', 'Delete'];
    let grid;
    return <GridComponent ref={g => grid = g} dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} height={265}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={{required: true}}/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'/>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
      <ColumnDirective field='Verified' headerText='Verified' width='100' type='boolean' displayAsCheckBox={true}/>
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]}/>
  </GridComponent>;
}
;
export default App;
