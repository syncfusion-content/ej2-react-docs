import { setValue } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { DialogFormTemplate } from './template';
function App() {
    let grid;
    const dialogTemplate = (props) => {
        return (<DialogFormTemplate {...props}/>);
    };
    const editOptions = {
        allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Dialog',
        template: dialogTemplate
    };
    const toolbarOptions = ['Add', 'Edit', 'Delete'];
    const actionComplete = (args) => {
        if (args.form) {
            if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
                /** Add Validation Rules */
                args.form.ej2_instances[0].addRules('Freight', { max: 500 });
            }
        }
    };
    const actionBegin = (args) => {
        if (args.requestType === 'save' && args.form) {
            /** cast string to integer value */
            setValue('data.Freight', parseFloat(args.form.querySelector("#Freight").value), args);
        }
    };
    return <GridComponent ref={g => grid = g} dataSource={data} actionComplete={actionComplete} actionBegin={actionBegin} editSettings={editOptions} toolbar={toolbarOptions} height={265}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={{required: true}}/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'/>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]}/>
  </GridComponent>;
}
;
export default App;
