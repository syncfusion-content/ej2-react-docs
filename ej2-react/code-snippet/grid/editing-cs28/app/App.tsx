
import { setValue } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, DialogEditEventArgs, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { IOrderModel } from './orderModel';
import { DialogFormTemplate } from './template';

function App() {
  let grid: Grid | null;
  const dialogTemplate = (props: IOrderModel): any => {
    return (<DialogFormTemplate {...props} />);
  }
  const editOptions: EditSettingsModel = {
    allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Dialog',
    template: dialogTemplate
  };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete'];
  const actionComplete = (args: DialogEditEventArgs): void => {
    if (args.form) {
      if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
        /** Add Validation Rules */
        args.form.ej2_instances[0].addRules('Freight', { max: 500 });
      }
    }
  }
  const actionBegin = (args: DialogEditEventArgs) => {
    if (args.requestType === 'save' && args.form) {
      /** cast string to integer value */
      setValue('data.Freight',
        parseFloat((args.form.querySelector("#Freight") as HTMLInputElement).value), args);
    }
  }
  return <GridComponent ref={g => grid = g} dataSource={data} actionComplete={actionComplete}
    actionBegin={actionBegin} editSettings={editOptions} toolbar={toolbarOptions}
    height={265}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
};
export default App;


