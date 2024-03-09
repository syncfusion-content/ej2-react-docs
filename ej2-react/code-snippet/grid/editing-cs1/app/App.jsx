import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    let newRecords = [];
    // Generate a random OrderId
    const generateOrderId = () => {
        return Math.floor(10000 + Math.random() * 90000);
    }
    // Generate a random CustomerId
    const generateCustomerId = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    // Generate a random ShipCity
    const generateShipCity = () => {
        const cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
        return cities[Math.floor(Math.random() * cities.length)];
    }
    // Generate a random Freight value
    const generateFreight = () => {
        return Math.random() * 100;
    }
    // Generate a random ShipName
    const generateShipName = () => {
        const names = ['Que Delícia', 'Bueno Foods', 'Island Trading', 'Laughing Bacchus Winecellars'];
        return names[Math.floor(Math.random() * names.length)];
    }
    const changeDatasource = () => {
        for (let i = 0; i < 5; i++) {
            newRecords = {
                OrderID: generateOrderId(),
                CustomerID: generateCustomerId(),
                ShipCity: generateShipCity(),
                Freight: generateFreight(),
                ShipName: generateShipName()
            };

            (grid.dataSource).unshift(newRecords);
            grid.setProperties({ dataSource: grid.dataSource });
        }
    }
    return <div>
        <ButtonComponent onClick={changeDatasource}>Change Datasource</ButtonComponent>
        <GridComponent dataSource={data} height={280} ref={g => grid = g}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' />
                <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
            </ColumnsDirective>
        </GridComponent>
    </div>
};
export default App;