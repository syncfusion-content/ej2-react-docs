

import * as React from "react";
import * as ReactDOM from "react-dom";
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { data } from '../datasource.ts';

class App extends React.Component<{}, {}>{
    public customAttributes: Object = {class: 'customcss'};
    render() {
        return <GridComponent dataSource={data} height={320}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' width='100' textAlign="Right"></ColumnDirective>
                    <ColumnDirective field='CustomerID' width='130' customAttributes={this.customAttributes}></ColumnDirective>
                    <ColumnDirective field='EmployeeID' width='100' textAlign="Right"></ColumnDirective>
                    <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"></ColumnDirective>
                    <ColumnDirective field='ShipCountry' width='100'></ColumnDirective>
                </ColumnsDirective>
        </GridComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('grid'));



