

import * as React from "react";
import * as ReactDOM from "react-dom";
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Edit, Toolbar,
EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
import { DialogFormTemplate, IOrderModel} from './template';
class App extends React.Component<{}, {}>{
    public editOptions: EditSettingsModel = { allowEditing: true, mode: 'Batch' };
    public toolbarOptions: ToolbarItems[] = ['Edit', 'Update', 'Cancel'];

    cellEdit(args: DialogEditEventArgs): void {
        if (args.value == "France") {
            args.cancel = true;
        }
    }

    render() {
        return <GridComponent dataSource={data} cellEdit={this.cellEdit.bind(this)} editSettings={this.editOptions} toolbar={this.toolbarOptions} height={265}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}></ColumnDirective>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Edit, Toolbar]} />
        </GridComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('grid'));


