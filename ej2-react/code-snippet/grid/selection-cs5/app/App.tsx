import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Edit, Toolbar, Filter, Selection, Page, ToolbarItems, FilterSettingsModel, RowDataBoundEventArgs, EditSettingsModel, SelectionSettingsModel} from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
  const settings: SelectionSettingsModel = { persistSelection: true, type:'Multiple' };
  const editSettings: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
  const filterOptions: FilterSettingsModel = { type: 'CheckBox' };
  const load = () => {
    for (let i = 0; i < data.length; i++) {
      data[i]['List'] = i + 1;
    }
  }
  const rowDataBound = (args: RowDataBoundEventArgs) => {
    args.isSelectable = args.data.List % 5 === 0;
  }
    return <GridComponent dataSource={data} selectionSettings={settings}
    editSettings={editSettings} toolbar={toolbarOptions} filterSettings={filterOptions} allowPaging={true} allowFiltering={true} pageSettings={{pageSize : 5}}
    rowDataBound={rowDataBound} load={load}>
            <ColumnsDirective>
              <ColumnDirective type='checkbox' width='50'/>
              <ColumnDirective field='List' width='120' headerText="List"/>
              <ColumnDirective field='OrderID' headerText="Order ID" isPrimaryKey="true" width='150'/>
              <ColumnDirective field='CustomerID' headerText="Customer ID" width='150'/>
              <ColumnDirective field='EmployeeID' headerText="Employee ID" width='150'/>
              <ColumnDirective field='ShipCity' headerText="Ship City" width='150'/>
            </ColumnsDirective>
            <Inject services={[Edit, Toolbar, Filter, Selection, Page]}/>
            </GridComponent>
};
export default App;