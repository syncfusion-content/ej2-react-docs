

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import './App.css';

// Defines the data to be displayed in the Grid.
const data: object[] = [
    { OrderID: 10248, CustomerName: 'Ana Trujillo', OrderDate: new Date(2025, 0, 12), ShipCountry: 'France', Freight: 32.38 },
    { OrderID: 10249, CustomerName: 'Martin Sommer', OrderDate: new Date(2025, 0, 15), ShipCountry: 'Germany', Freight: 11.61 },
    { OrderID: 10250, CustomerName: 'Thomas Hardy', OrderDate: new Date(2025, 1, 5), ShipCountry: 'Brazil', Freight: 65.83 },
    { OrderID: 10251, CustomerName: 'Elizabeth Lincoln', OrderDate: new Date(2025, 1, 18), ShipCountry: 'France', Freight: 41.34 },
    { OrderID: 10252, CustomerName: 'Victoria Ashworth', OrderDate: new Date(2025, 2, 10), ShipCountry: 'Belgium', Freight: 51.30 },
    { OrderID: 10253, CustomerName: 'Martine Rance', OrderDate: new Date(2025, 2, 22), ShipCountry: 'Brazil', Freight: 58.17 },
]

function App() {
    return <div>
        {/* Assigns the dataset to the Grid component */}
        <GridComponent dataSource={data}>
            {/* Define the columns to be displayed */}
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign='Right'/>
                <ColumnDirective field='CustomerName' headerText='Customer Name' width='100'/>
                <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format='yMd' textAlign='Right'/>
                <ColumnDirective field='Freight' width='100' format='C2' textAlign='Right'/>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100'/>
            </ColumnsDirective>
        </GridComponent>
    </div>
}
export default App;


