

import { Dialog } from '@syncfusion/ej2-popups';
import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { DialogEditEventArgs, Edit, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

export default class App extends React.Component<{}, {}> {
  public editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
  public toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete'];

  public actionComplete(args: DialogEditEventArgs): void {
      if (args.requestType === 'beginEdit' || args.requestType === 'add') {
          let newFooterButton = {
              buttonModel: { content: 'custom' },
              click: this.onCustomButtonClick
          };
          args.dialog.buttons.push(newFooterButton);
          args.dialog.refresh();
      }
  }

  public onCustomButtonClick() {
      alert('Add/Edit dialog custom footer button clicked');
  }

  public render() {
    this.actionComplete = this.actionComplete.bind(this);
    return <GridComponent dataSource={data} actionComplete={this.actionComplete}
      editSettings={this.editOptions} toolbar={this.toolbarOptions} height={265}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}/>
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'/>
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent>
  }
};


