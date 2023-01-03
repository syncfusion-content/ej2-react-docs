

import { ColumnDirective, ColumnsDirective, GridComponent, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import { ContextMenu, Edit, EditSettingsModel, Inject, Page, ContextMenuItem, RowSelectEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

export default class App extends React.Component<{}, {}> {
  public contextMenuItems: ContextMenuItem[] = ['Copy', 'Edit', 'Delete'];
  public editing: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  public grid: Grid | null;
  public rowSelected(args: RowSelectEventArgs) {
      var contextMenuObj = this.grid.contextMenuModule.contextMenu;
      if (args.data.OrderID % 2 === 0) {
          contextMenuObj.enableItems(['Copy'], false);
      } else {
          contextMenuObj.enableItems(['Copy'], true);
      }
  }
  public render() {
    this.rowSelected = this.rowSelected.bind(this);
    return (
      <div>
          <GridComponent dataSource={data} allowPaging={true} contextMenuItems={this.contextMenuItems}
              editSettings={this.editing}  rowSelected={this.rowSelected}  ref={g => this.grid = g}>
              <ColumnsDirective>
                  <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' isPrimaryKey={true}/>
                  <ColumnDirective field='CustomerID' headerText='Customer Name' width='140'/>
                  <ColumnDirective field='Freight' headerText='Freight' format='C2' textAlign='Right' editType='numericedit' width='140' />
                  <ColumnDirective field='ShipName' headerText='Ship Name' width='200'/>
              </ColumnsDirective>
              <Inject services={[ContextMenu, Page, Edit]} />
          </GridComponent>
      </div>
    );
  }
}


