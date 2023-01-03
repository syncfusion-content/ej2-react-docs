import * as React from "react";
import * as ReactDOM from "react-dom";
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
class App extends React.Component {
    editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    toolbarOptions = ['Add', 'Edit', 'Delete'];
    grid;
    load(args) {
        this.grid.element.addEventListener('keydown', this.keyDownHandler);
    }
    keyDownHandler(e) {
        if (e.keyCode === 13) {
            let gridIns = this.ej2_instances[0];
            gridIns.addRecord();
        }
    }
    render() {
        return <GridComponent dataSource={data} load={this.load.bind(this)} editSettings={this.editOptions} toolbar={this.toolbarOptions} height={265} ref={g => this.grid = g}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}></ColumnDirective>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'></ColumnDirective>
                <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" format='C2' editType='numericedit'></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Edit, Toolbar]}/>
        </GridComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('grid'));
