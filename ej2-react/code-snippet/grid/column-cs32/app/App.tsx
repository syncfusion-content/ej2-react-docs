

import { Column, ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Filter, Inject, Page } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const [message, setMessage] = useState('');
  let persistedGridSettings: object;
  const saveBtn = () => {
    persistedGridSettings = JSON.parse(((grid as GridComponent)).getPersistData());
    var gridColumns = Object.assign([], ((grid as GridComponent)).getColumns());
    (persistedGridSettings as any).columns.forEach((persistedColumn: Column) => {
      const column = gridColumns.find((col: Column) => col.field === persistedColumn.field);
      if (column) {
        persistedColumn.headerText = 'Text Changed';
        persistedColumn.template = (column as Column).template;
        persistedColumn.headerTemplate = (column as Column).headerTemplate;
      }
    });
    window.localStorage.setItem('gridOrders1', JSON.stringify(persistedGridSettings));
    (grid as GridComponent).setProperties(persistedGridSettings as object);
    setMessage('Saved the headerText, template column, and headerTemplate properties in the persisted settings');
  }

  const restoreBtn = () => {
    const savedSettings = window.localStorage.getItem("gridOrders1");
    if (savedSettings) {
      (grid as GridComponent).setProperties(JSON.parse(savedSettings));
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
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' headerTemplate='<button>HeaderTemplate</button>'/>
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Filter, Page]} />
    </GridComponent></div>)
};
export default App;