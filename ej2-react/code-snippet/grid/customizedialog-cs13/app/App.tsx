

import * as React from "react";
import * as ReactDOM from "react-dom";
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Edit, Toolbar,
EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
import { DialogFormTemplate, IOrderModel} from './template';
document.getElementById("grid").addEventListener("click", (e) => {
    if((event.target as any).classList.contains("e-rowcell")){
        let gridObj: any = (document.getElementsByClassName("e-grid")[0] as any).ej2_instances[0];
        let index: number = parseInt((event.target as any).getAttribute("Index"));
        let colindex:number = parseInt((event.target as any).getAttribute("aria-colindex"));
        let field:string = gridObj.getColumns()[colindex].field;
        gridObj.editModule.editCell(index, field);
    }
});

class App extends React.Component<{}, {}>{
    public editOptions: EditSettingsModel = { allowAdding:true, allowDeleting:true, allowEditing: true, mode: 'Batch' };
    public toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

    render() {
        return <GridComponent id="Grid" dataSource={data} ref={grid => this.gridInstance = grid} editSettings={this.editOptions} toolbar={this.toolbarOptions} height={265}>
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


