

import * as React from "react";
import * as ReactDOM from "react-dom";
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Edit, Toolbar,
EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
import { DialogFormTemplate, IOrderModel} from './template';
class App extends React.Component<{}, {}>{
    public editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    public toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete'];
    private grid: GridComponent;

    actionBegin(args: DialogEditEventArgs): void {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            for (var i = 0; i < this.grid.columns.length; i++) {
                if (this.grid.columns[i].field == "CustomerID") {
                    this.grid.columns[i].visible = true;
                }
                else if (this.grid.columns[i].field == "ShipCountry") {
                    this.grid.columns[i].visible = false;
                }
            }
        }
    }
    actionComplete(args: DialogEditEventArgs): void {
        if (args.requestType === 'save') {
            for (var i = 0; i < this.grid.columns.length; i++) {
                if (this.grid.columns[i].field == "CustomerID") {
                    this.grid.columns[i].visible = false;
                }
                else if (this.grid.columns[i].field == "ShipCountry") {
                    this.grid.columns[i].visible = true;
                }
            }
        }
    }

    render() {
        return <GridComponent dataSource={data} actionBegin={this.actionBegin.bind(this)} actionComplete={this.actionComplete.bind(this)} editSettings={this.editOptions} toolbar={this.toolbarOptions} height={265} ref={g => this.grid = g}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}></ColumnDirective>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' visible={false}></ColumnDirective>
                <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" format='C2' editType='numericedit'></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Edit, Toolbar]} />
        </GridComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('grid'));


