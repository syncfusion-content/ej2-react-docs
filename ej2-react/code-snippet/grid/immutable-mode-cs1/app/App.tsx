

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, RowDataBoundEventArgs } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import React, { useState } from 'react';
import { data } from './datasource';

interface CustomRowDataBoundEventArgs extends RowDataBoundEventArgs {
  column: {
    field: string;
  };
  cell: HTMLElement;
  data: DataType;
}

interface DataType {
  OrderID: number;
  CustomerID: string;
  Freight: number;
  ShipName: string;
  ShipCity: string;
  isNewlyAdded: boolean;
}

function App() {
  const pageSettings: object = { pageSize: 50 };
  const [rowData, setRowData] = useState<DataType[]>(data)
  const selectionSettings: object = {type: 'Multiple'};
  const [message, setMessage] = useState('')
  let immutableGrid: GridComponent | null;
  const queryCellInfo = (args: CustomRowDataBoundEventArgs) => {
    if (args.column.field === 'ShipName' && args.data.ShipName === "Gems Chevalier") {
      (args.cell as HTMLElement).style.backgroundColor = 'rgb(210, 226, 129)';
    }
  }
  const rowDataBound = (args: RowDataBoundEventArgs) => {
    (args.row as HTMLElement).style.backgroundColor = (args.data as DataType).isNewlyAdded ? '' : ' rgb(208, 255, 255)';
  }
  const addTopEvent = () => {
    (immutableGrid as GridComponent).getAllDataRows().forEach(row => {
      (row as HTMLElement).style.backgroundColor = "rgb(208, 255, 255)";
    });
    let count = 0;
    if (count < 1) {
      let newRowData: object[] = [];
      let addedRecords: object = {
        'OrderID': generateOrderId(),
        'CustomerID': generateCustomerId(),
        'ShipCity': generateShipCity(),
        'Freight': generateFreight(),
        'ShipName': generateShipName(),
        'isNewlyAdded': true
      };
      newRowData.push(addedRecords);
      setRowData(([...newRowData, ...rowData as DataType[]] as DataType[]));
      count++;
      setMessage(`${count} rows rendered after performing the add action`);
    }
  }
  const deleteEvent = () => {
    let count = 0;
    if (count < 1 && (rowData as DataType[]).length > 0) {
      setRowData((rowData as DataType[]).slice(1));
      count++;
      setMessage(`${count} rows deleted after performing delete action`);
    }
  }
  const updateEvent =() => {
    let count = 0;
    let newRowData = (rowData as any).map((row: any) => {
      if (row.ShipName === 'Bueno Foods') {
        count++;
        return { ...row, 'ShipName': "Gems Chevalier" };
      } else {
        return row;
      }
    });
    setRowData(newRowData);
    setMessage(` ${count} rows updated after performing update action`);
  }

  const generateOrderId = () => {
    return Math.floor(10000 + Math.random() * 90000);
  }

  const generateCustomerId =() => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const generateShipCity = () => {
    const cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
    return cities[Math.floor(Math.random() * cities.length)];
  }

  const generateFreight =() => {
    const randomValue = Math.random() * 100;
    return parseFloat(randomValue.toFixed(2));
  }

  const generateShipName =() => {
    const names = ['Que Delícia', 'Bueno Foods', 'Island Trading', 'Laughing Bacchus Winecellars'];
    return names[Math.floor(Math.random() * names.length)];
  }
  return <div>
              <ButtonComponent cssClass='e-info' onClick={addTopEvent}>Add rows data</ButtonComponent>
              <ButtonComponent cssClass='e-info' onClick={deleteEvent}>Delete rows</ButtonComponent>
              <ButtonComponent cssClass='e-info' onClick={updateEvent}>Update Freight Data</ButtonComponent>
              <div id='message'>{message}</div>
              <GridComponent ref={immutable => { immutableGrid = immutable }} dataSource={rowData } height='250' enableImmutableMode={true} allowPaging={true} pageSettings={pageSettings} selectionSettings={selectionSettings} rowDataBound={rowDataBound} queryCellInfo={queryCellInfo}>
                <ColumnsDirective>
                  <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='120' textAlign='Right'></ColumnDirective>
                  <ColumnDirective field='CustomerID' headerText='Customer ID' width='160'></ColumnDirective>
                  <ColumnDirective field='Freight' headerText='Freight' width='130' textAlign='Right' />
                  <ColumnDirective field='ShipName' headerText='Ship Name' width='120' />
                </ColumnsDirective>
                <Inject services={[Page]} />
              </GridComponent>
            </div>
}
export default App; 