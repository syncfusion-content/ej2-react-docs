

import * as React from "react";
import * as ReactDOM from "react-dom";
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
class App extends React.Component<{}, {}>{
    public pageOptions: PageSettingsModel = {pageSizes: ["5", "10", "All"]};
    public gridObj: GridComponent;
    render() {
        return <GridComponent dataSource={data} allowPaging={true} ref={grid => this.gridObj = grid} pageSettings={this.pageOptions} height={273}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}></ColumnDirective>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'></ColumnDirective>
                <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" textAlign="Right"></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Page]} />
        </GridComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('grid'));


