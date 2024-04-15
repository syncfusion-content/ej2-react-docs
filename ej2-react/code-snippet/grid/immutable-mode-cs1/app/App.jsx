import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  const pageSettings = { pageSize: 50 };
  const [rowData, setRowData] = useState(data);
  const selectionSettings = {type: 'Multiple'};
  const [message, setMessage] = useState('')
  let immutableGrid;
  const queryCellInfo = (args) => {
    if (args.column.field === 'ShipName' && args.data.ShipName === "Gems Chevalier") {
      args.cell.style.backgroundColor = 'rgb(210, 226, 129)';
    }
  }
  const rowDataBound = (args) => {
    args.row.style.backgroundColor = args.data.isNewlyAdded ? '' : ' rgb(208, 255, 255)';
  }
  const addTopEvent = () => {
    immutableGrid.getAllDataRows().forEach(row => {
      row.style.backgroundColor = "rgb(208, 255, 255)";
    });
    let count = 0;
    if (count < 1) {
      let newRowData = [];
      let addedRecords = {
        'OrderID': generateOrderId(),
        'CustomerID': generateCustomerId(),
        'ShipCity': generateShipCity(),
        'Freight': generateFreight(),
        'ShipName': generateShipName(),
        'isNewlyAdded': true
      };
      newRowData.push(addedRecords);
      setRowData(([...newRowData, ...rowData]));
      count++;
      setMessage(`${count} rows rendered after performing the add action`);
    }
  }
  const deleteEvent = () => {
    let count = 0;
    if (count < 1 && (rowData).length > 0) {
      setRowData((rowData).slice(1));
      count++;
      setMessage(`${count} rows deleted after performing delete action`);
    }
  }
  const updateEvent =() => {
    let count = 0;
    let newRowData = rowData.map((row) => {
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
              <GridComponent ref={immutable => { immutableGrid = immutable }} dataSource={rowData} height='250' enableImmutableMode={true} allowPaging={true} pageSettings={pageSettings} selectionSettings={selectionSettings} rowDataBound={rowDataBound} queryCellInfo={queryCellInfo}>
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