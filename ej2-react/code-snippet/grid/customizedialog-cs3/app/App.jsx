import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
export default class App extends React.Component {
    editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    toolbarOptions = ['Add', 'Edit', 'Delete'];
    actionComplete(args) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            let newFooterButton = {
                buttonModel: { content: 'custom' },
                click: this.onCustomButtonClick
            };
            args.dialog.buttons.push(newFooterButton);
            args.dialog.refresh();
        }
    }
    onCustomButtonClick() {
        alert('Add/Edit dialog custom footer button clicked');
    }
    render() {
        this.actionComplete = this.actionComplete.bind(this);
        return <GridComponent dataSource={data} actionComplete={this.actionComplete} editSettings={this.editOptions} toolbar={this.toolbarOptions} height={265}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}/>
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'/>
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]}/>
    </GridComponent>;
    }
}
;
