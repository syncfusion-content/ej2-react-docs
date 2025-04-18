import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Toolbar, DetailRow, getPrintGridModel } from '@syncfusion/ej2-react-grids';
import React, { useEffect, useRef, useState } from 'react';
import { extend } from '@syncfusion/ej2-base';
import { employeeData, data, customerData } from './data';

function App() {
    let grid = useRef(null);
    const parentData = employeeData;    
    const toolbar = ['Print'];
    const pageSettings = { pageSize: 4 };
    const hierarchyPrintMode = 'Expanded';
    const [persistedExpandedRows, setPersistedExpandedRows] = useState({});
    const secondChildGrid = {
        dataSource: customerData,
        queryString: 'CustomerID',
        columns: [
            { field: 'CustomerID', headerText: 'Customer ID', width: 75 },
            { field: 'Phone', headerText: 'Phone', width: 100 },
            { field: 'Address', headerText: 'Address', width: 120 },
            { field: 'Country', headerText: 'Country', width: 100 },
        ],
    };
    const childGridOptions = {
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
    const getExpandedState = (grid, mode, currentPage) => {
        const expandedRowState = {};
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
    const actionBegin = (args) => {
        if (args.requestType === 'paging') {
        const page = args.previousPage;
        const current = getExpandedState(grid, 'Expanded', page);
        setPersistedExpandedRows((prev) => ({ ...prev, ...current }));
        }
    };
    const printInit = (args) => {
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
            <ColumnDirective field="EmployeeID" headerText="Employee ID" width="100" textAlign="Right" />
            <ColumnDirective field="FirstName" headerText="First Name" width="120" />
            <ColumnDirective field="Title" headerText="Title" width="150" />
            <ColumnDirective field="City" headerText="City" width="100" />
            </ColumnsDirective>
            <Inject services={[Page, Toolbar, DetailRow]} />
      </GridComponent>
    )
};
export default App;


