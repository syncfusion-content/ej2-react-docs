import { DataManager } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from "react";
import './App.css';
import { data } from './datasource';
export default class App extends React.Component {
    data = new DataManager(data);
    render() {
        return <GridComponent dataSource={this.data}>
                <ColumnsDirective>
                 <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
                 <ColumnDirective field='CustomerID' width='100'/>
                 <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
                 <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
                 <ColumnDirective field='ShipCountry' width='100'/>
               </ColumnsDirective>
              </GridComponent>;
    }
}
;
