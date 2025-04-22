import { ColumnDirective, ColumnsDirective, GridComponent, GridModel, ActionEventArgs, HierarchyGridPrintMode } from '@syncfusion/ej2-react-grids';
import { Inject, Page, PageSettingsModel, Toolbar, DetailRow, ToolbarItems, getPrintGridModel } from '@syncfusion/ej2-react-grids';
import { employeeData, data, customerData } from './datasource';
import React, { useEffect, useState } from 'react';
import { extend } from '@syncfusion/ej2-base';

function App() {  
  let grid: GridComponent | null;
  const parentData: object = employeeData;
  const toolbar: ToolbarItems[] = ['Print'];
  const pageSettings: PageSettingsModel = { pageSize: 4 };
  const [persistedExpandedRows, setPersistedExpandedRows] = useState({});
  const hierarchyPrintMode: HierarchyGridPrintMode = 'Expanded';
  const secondChildGrid: GridModel = {
    dataSource: customerData,
    queryString: 'CustomerID',
    columns: [
      { field: 'CustomerID', headerText: 'Customer ID', textAlign: 'Right', width: 75 },
      { field: 'ContactName', headerText: 'Contact Name', width: 100 },
      { field: 'Address', headerText: 'Address', width: 120 },
      { field: 'Country', headerText: 'Country', width: 100 }
    ]
  };
  const childGridOptions: GridModel = {
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'ShipCity', headerText: 'Ship City', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    dataSource: data,
    queryString: 'EmployeeID',
    childGrid: secondChildGrid
  };
  useEffect(() => {
    if (grid) {
      grid.on('printGrid-Init', printInit);
    }
  }, [persistedExpandedRows]);
  const getExpandedState = (grid: GridComponent, mode: HierarchyGridPrintMode, currentPage: number): Record<number, any> => {
    const expandedRowState: { [key: number]: any } = {};
    const gridRows = grid.getRowsObject();
    for (let i = 0; i < gridRows.length; i++) {
      const gridRow = gridRows[i];
      if (gridRow.isExpand && !gridRow.isDetailRow) {
        const expandedIndex = grid.allowPaging
        ? gridRow.index +
        currentPage * grid.pageSettings.pageSize -
        grid.pageSettings.pageSize
        : gridRow.index;
        expandedRowState[expandedIndex] = {
        isExpand: true,
        gridModel: getPrintGridModel(gridRow.childGrid, mode),
        };
      }
    }
    return expandedRowState;
  };
  const actionBegin = (args: ActionEventArgs): void => {
    if (args.requestType === 'paging') {
      const page = args.previousPage;
      const current = getExpandedState(grid, 'Expanded', page);
      setPersistedExpandedRows((prev) => ({ ...prev, ...current }));
    }
  };
  const printInit = (args: any): void => {
    const printGridInstance = args.printgrid;
    printGridInstance.expandedRows = extend(
      {},
      persistedExpandedRows,
      printGridInstance.expandedRows
    );
  };
  return (
    <GridComponent dataSource={parentData} childGrid={childGridOptions} allowPaging={true} pageSettings={pageSettings} hierarchyPrintMode={hierarchyPrintMode} toolbar={toolbar} ref={(g) => (grid = g)} actionBegin={actionBegin}>
      <ColumnsDirective>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right" />
        <ColumnDirective field='FirstName' headerText='First Name' width='150' />
        <ColumnDirective field='City' headerText='City' width='150' />
        <ColumnDirective field='Country' headerText='Country' width='150' />
      </ColumnsDirective>
      <Inject services={[DetailRow, Toolbar,  Page,]} />
    </GridComponent >
  )
};

export default App;