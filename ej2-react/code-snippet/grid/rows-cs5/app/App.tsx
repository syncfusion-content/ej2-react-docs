import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, Edit, EditSettingsModel, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid: GridComponent | null;
    const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const generateOrderId = () => {
        return Math.floor(10000 + Math.random() * 90000);
    };

    const generateCustomerId = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    const generateShipCity = () => {
        const cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
        return cities[Math.floor(Math.random() * cities.length)];
    };

    const generateFreight = () => {
        return Math.random() * 100;
    };

    const generateShipName = () => {
        const names = ['Que Delícia', 'Bueno Foods', 'Island Trading', 'Laughing Bacchus Winecellars'];
        return names[Math.floor(Math.random() * names.length)];
    };
    const addRow = () => {
        const newRecord: Object = {
            OrderID: generateOrderId(),
            CustomerID: generateCustomerId(),
            ShipCity: generateShipCity(),
            Freight: generateFreight(),
            ShipName: generateShipName()
        };
        (grid as GridComponent).addRecord(newRecord, 0);
    }
    return (<div><ButtonComponent id='add' onClick={addRow}>Add New Row</ButtonComponent>
        <GridComponent dataSource={data} ref={g => grid = g} editSettings={editOptions}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' width='100' textAlign="Right" isPrimaryKey={true} />
                <ColumnDirective field='CustomerID' width='100' />
                <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right" />
                <ColumnDirective field='ShipName' width='100' />
                <ColumnDirective field='ShipCity' width='100' textAlign="Right" />
            </ColumnsDirective>
            <Inject services={[Edit]} />
        </GridComponent></div>)

}
export default App;