import { ColumnChooser, ColumnDirective, ColumnMenu, ColumnsDirective, Edit, EditSettingsModel, GridComponent, Group, Inject, Page, PageSettingsModel, Sort, ToolbarItems, Toolbar, Filter, Reorder } from '@syncfusion/ej2-react-grids';
import { L10n } from '@syncfusion/ej2-base';
import * as React from 'react';
import arAELocalization from './locale.json';
import { data } from './datasource';
import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';

L10n.load(arAELocalization);
function App() {
  let grid: GridComponent | null;
  const editSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Normal' };
  const toolbar: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const pageOptions: PageSettingsModel = { pageSize: 7 };
  const changeRTL = (args: ChangeEventArgs) => {
    (grid as GridComponent).enableRtl = !args.checked;
  }
  return (<div>
    <label style={{ padding: "10px 10px" }}>Enable or disable RTL mode</label>
    <SwitchComponent change={changeRTL}></SwitchComponent>
    <GridComponent ref={g => grid = g} dataSource={data} locale='ar-AE' allowPaging={true} pageSettings={pageOptions} allowGrouping={true} allowSorting={true} allowReordering={true}
      allowFiltering={true} editSettings={editSettings} toolbar={toolbar} enableRtl={true} showColumnChooser={true} showColumnMenu={true}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCity' headerText='ShipCity' width='150' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
      </ColumnsDirective>
      <Inject services={[Page, Group, Sort, Toolbar, Filter, Edit, ColumnChooser, ColumnMenu, Reorder]} />
    </GridComponent></div>)
};
export default App;