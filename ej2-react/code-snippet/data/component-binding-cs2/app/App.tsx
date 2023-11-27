import { DataManager } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent} from '@syncfusion/ej2-react-grids';
import * as React from "react";

const SERVICE_URI = 'https://services.syncfusion.com/react/production/api/Orders';

export default class App extends React.Component<{}, {}>{
    public data: DataManager = new DataManager({ url: SERVICE_URI });
    public render(){
        return <GridComponent  dataSource={this.data}>
                <ColumnsDirective>
                 <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
                 <ColumnDirective field='CustomerID' width='100'/>
                 <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
                 <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
                 <ColumnDirective field='ShipCountry' width='100'/>
               </ColumnsDirective>
              </GridComponent>
    }
};


