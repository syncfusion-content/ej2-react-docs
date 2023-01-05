import * as React from "react";
import * as ReactDOM from "react-dom";
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
document.getElementById("grid").addEventListener("click", (e) => {
    if (event.target.classList.contains("e-rowcell")) {
        let gridObj = document.getElementsByClassName("e-grid")[0].ej2_instances[0];
        let index = parseInt(event.target.getAttribute("Index"));
        let colindex = parseInt(event.target.getAttribute("aria-colindex"));
        let field = gridObj.getColumns()[colindex].field;
        gridObj.editModule.editCell(index, field);
    }
});
class App extends React.Component {
    editOptions = { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Batch' };
    toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    render() {
        return <GridComponent id="Grid" dataSource={data} ref={grid => this.gridInstance = grid} editSettings={this.editOptions} toolbar={this.toolbarOptions} height={265}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}></ColumnDirective>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Edit, Toolbar]}/>
        </GridComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('grid'));
