import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { DialogFormTemplate } from './wizardTemplate';
function App() {
    const toolbarOptions = ['Add', 'Edit', 'Delete'];
    let grid;
    const rules = { required: true };
    const dialogTemplate = (props) => {
        const a = [props, grid];
        return (<DialogFormTemplate {...a}/>);
    };
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: dialogTemplate };
    const actionComplete = (args) => {
        // Set initial Focus
        if (args.requestType === 'beginEdit') {
            args.form.elements.namedItem('CustomerID').focus();
        }
        else if (args.requestType === 'add') {
            args.form.elements.namedItem('OrderID').focus();
        }
    };
    return <GridComponent ref={g => grid = g} dataSource={data} actionComplete={actionComplete} editSettings={editOptions} toolbar={toolbarOptions} height={265}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={rules}/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={rules}/>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]}/>
  </GridComponent>;
}
;
export default App;
