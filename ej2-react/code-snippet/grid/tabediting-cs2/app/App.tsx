

import * as React from "react";
import * as ReactDOM from "react-dom";
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Edit, Toolbar,
EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
import { DialogFormTemplate, IOrderModel} from './template';

class App extends React.Component<{}, {}>{
    public editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: this.dialogTemplate.bind(this) };
    public toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete'];
    public grid: GridComponent;

    dialogTemplate(props: IOrderModel): any {
        let a = [props, this.grid]
      return (<DialogFormTemplate {...a} />);
    }

    actionComplete(args: DialogEditEventArgs): void {
        // Set initail Focus
        if (args.requestType === 'beginEdit') {
            (args.form.elements.namedItem('CustomerID') as HTMLInputElement).focus();
        } else if (args.requestType === 'add') {
            (args.form.elements.namedItem('OrderID')as HTMLInputElement).focus();
        }
    }

    render() {
        return <GridComponent ref={g=> this.grid = g} dataSource={data} actionComplete={this.actionComplete.bind(this)} editSettings={this.editOptions} toolbar={this.toolbarOptions} height={265}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules= {{ required: true }}></ColumnDirective>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules= {{ required: true }}></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Edit, Toolbar]} />
        </GridComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('grid'));


