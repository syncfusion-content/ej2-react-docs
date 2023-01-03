

import * as React from "react";
import * as ReactDOM from "react-dom";
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Edit, Toolbar,
EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
import { DialogFormTemplate, IOrderModel} from './template';
class App extends React.Component<{}, {}>{
    public editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    public toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete'];
    private grid: GridComponent;

    load(args: DialogEditEventArgs): void {
        this.grid.element.addEventListener('keydown', this.keyDownHandler);
    }

    keyDownHandler(e: any): void {
        if(e.keyCode === 13) {
            let gridIns = this.ej2_instances[0];
            gridIns.addRecord();
        }
    }

    render() {
        return <GridComponent dataSource={data} load={this.load.bind(this)}
        editSettings={this.editOptions} toolbar={this.toolbarOptions} height={265} ref={g => this.grid = g}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}></ColumnDirective>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'></ColumnDirective>
                <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" format='C2' editType='numericedit'></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Edit, Toolbar]} />
        </GridComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('grid'));


