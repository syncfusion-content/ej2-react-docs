

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Grid, GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { data } from '../datasource.ts';

class App extends React.Component<{}, {}>{
    private customAttributes: Object = { class: 'orientationcss'};
    public setHeaderHeight(args) {
        let textWidth: number = document.querySelector(".orientationcss > div").scrollWidth;//Obtain the width of the headerText content.
        let headerCell: NodeList = document.querySelectorAll(".e-headercell");
        for(let i: number = 0; i < headerCell.length; i++) {
            (headerCell.item(i)).style.height = textWidth + 'px'; //Assign the obtained textWidth as the height of the headerCell.
        }
    }

    render() {
        return (<div>
        <GridComponent dataSource={data} height={260} created={this.setHeaderHeight.bind(this)} >
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"></ColumnDirective>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'></ColumnDirective>
                <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right"></ColumnDirective>
                <ColumnDirective field='Freight' headerText='Freight' customAttributes={this.customAttributes} width='80' format="C2" textAlign="Center"></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100'></ColumnDirective>
            </ColumnsDirective>
        </GridComponent>
        </div>)
    }
};
ReactDOM.render(<App />, document.getElementById('grid'));



