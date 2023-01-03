import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ContextMenu, Edit, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
export default class App extends React.Component {
    contextMenuItems = ['Copy', 'Edit', 'Delete'];
    editing = { allowEditing: true, allowAdding: true, allowDeleting: true };
    grid;
    rowSelected(args) {
        var contextMenuObj = this.grid.contextMenuModule.contextMenu;
        if (args.data.OrderID % 2 === 0) {
            contextMenuObj.enableItems(['Copy'], false);
        }
        else {
            contextMenuObj.enableItems(['Copy'], true);
        }
    }
    render() {
        this.rowSelected = this.rowSelected.bind(this);
        return (<div>
          <GridComponent dataSource={data} allowPaging={true} contextMenuItems={this.contextMenuItems} editSettings={this.editing} rowSelected={this.rowSelected} ref={g => this.grid = g}>
              <ColumnsDirective>
                  <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' isPrimaryKey={true}/>
                  <ColumnDirective field='CustomerID' headerText='Customer Name' width='140'/>
                  <ColumnDirective field='Freight' headerText='Freight' format='C2' textAlign='Right' editType='numericedit' width='140'/>
                  <ColumnDirective field='ShipName' headerText='Ship Name' width='200'/>
              </ColumnsDirective>
              <Inject services={[ContextMenu, Page, Edit]}/>
          </GridComponent>
      </div>);
    }
}
