
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids'
import { MessageComponent } from '@syncfusion/ej2-react-notifications';
import React, { useState } from 'react';
import { data } from './datasource';
function App() {
  let grid;
  let filteredGrid;
  const pageSettings = { pageSize: 10, pageCount: 5 };
  let filteredData;
  let showRecords;
  let showWarning;
  const [isFilteredGridVisible, setIsFilteredGridVisible] = useState(false);
  const [isMsgWarningVisible, setIsMsgWarningVisible] = useState(false);
  const getFilter = () => {
    filteredData = grid.getFilteredRecords();
    showRecords = filteredData.length > 0 ? true : false;
    showWarning = !showRecords;
    if (showRecords) {
      filteredGrid.dataSource = filteredData;
    }
    setIsMsgWarningVisible(showWarning);
    setIsFilteredGridVisible(showRecords);
  }
  const clear = () => {
    grid.clearFiltering();
    showRecords = false;
    showWarning = false;
    setIsMsgWarningVisible(false);
    setIsFilteredGridVisible(false);
  }
  return (<div><div id='msgWarning' style={{ display: isMsgWarningVisible ? 'block' : 'none' }}>
    <MessageComponent content="No Records" cssClass="e-content-center" severity="Warning"></MessageComponent></div>
    <ButtonComponent cssClass="e-success" onClick={getFilter}>Get Filtered Data</ButtonComponent>
    <ButtonComponent cssClass='e-danger' onClick={clear}>Clear</ButtonComponent>
    <GridComponent ref={g => grid = g} dataSource={data} allowFiltering={true} pageSettings={pageSettings} allowPaging={true}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' format='C' width='100' textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
      </ColumnsDirective>
      <Inject services={[Filter, Page]} />
    </GridComponent>
    <div id='filteredGrid' style={{ display: isFilteredGridVisible ? 'block' : 'none' }}>
      <h3>Filtered Records</h3>
      <GridComponent ref={fg => filteredGrid = fg} allowPaging={true}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
          <ColumnDirective field='Freight' headerText='Freight' format='C' width='100' textAlign="Right" />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div></div>)
}
export default App;