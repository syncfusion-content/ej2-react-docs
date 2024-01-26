

import { Column, ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Filter, Inject, Page } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const [message, setMessage] = useState('');
  let persistedGridSettings;
  const saveBtn = () => {
    persistedGridSettings = JSON.parse((grid).getPersistData());
    var gridColumns = Object.assign([], (grid).getColumns());
    persistedGridSettings.columns.forEach((persistedColumn) => {
      const column = gridColumns.find((col) => col.field === persistedColumn.field);
      if (column) {
        persistedColumn.headerText = 'Text Changed';
        persistedColumn.template = column.template;
        persistedColumn.headerTemplate = column.headerTemplate;
      }
    });
    window.localStorage.setItem('gridOrders1', JSON.stringify(persistedGridSettings));
    grid.setProperties(persistedGridSettings);
    setMessage('Saved the headerText, template column, and headerTemplate properties in the persisted settings');
  }

  const restoreBtn = () => {
    const savedSettings = window.localStorage.getItem("gridOrders1");
    if (savedSettings) {
      grid.setProperties(JSON.parse(savedSettings));
      setMessage('Restored the headerText, template column, and headerTemplate');
    } else {
      setMessage('No saved settings found.');
    }
  }
  return (<div><p id='message'>{message}</p>
    <ButtonComponent onClick={saveBtn}>Save column settings</ButtonComponent>
    <ButtonComponent onClick={restoreBtn}>Restore column settings</ButtonComponent>
    <GridComponent id='Orders' dataSource={data} allowFiltering={true} allowPaging={true} enablePersistence={true} height={230}
      ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'/>
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Filter, Page]} />
    </GridComponent></div>)
};
export default App;