

import { ColumnDirective, ColumnsDirective, Edit } from '@syncfusion/ej2-react-grids';
import { EditSettingsModel, Grid, GridComponent, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from "react";
import { data } from './datasource';
import { IOrderModel } from './orderModel';
import { DialogFormTemplate} from './wizardTab';

function App() {
  const dialogTemplate = (props: IOrderModel): any => {
    const a = [props, grid]
    return (<DialogFormTemplate {...a} />);
  }
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: dialogTemplate };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete'];
  let grid: Grid | null;
  return <GridComponent ref={g => grid = g} dataSource={data} editSettings={editOptions}
    toolbar={toolbarOptions} height={265}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
};
export default App;


