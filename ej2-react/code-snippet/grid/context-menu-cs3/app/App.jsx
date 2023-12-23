import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ContextMenu, Inject, Page, Sort, ExcelExport, PdfExport } from '@syncfusion/ej2-react-grids';
import React, { useEffect } from 'react';
import { data } from './datasource';

function App() {
  let grid
  let values;
  const contextMenuItems = ['SortAscending', 'SortDescending', 'FirstPage', 'PrevPage', 'LastPage', 'NextPage', 'PdfExport', 'ExcelExport',];
  const created = () => {
    grid.contextMenuModule.contextMenu.beforeOpen = (args) => {
      if (args.event instanceof MouseEvent && args.event.which === 3) {
        args.cancel = true;
      }
      args.event = values;
      grid.contextMenuModule.contextMenuBeforeOpen(args);
    };
  }

  useEffect(() =>{
    const gridElement = document.getElementById('Grid');
    gridElement.onclick = (event) => {
    values = event;
    grid.contextMenuModule.contextMenu.open(
      values.pageY + pageYOffset,
      values.pageX + pageXOffset
    );
    }
  },[])
  return (
    <div>
      <GridComponent id='Grid' dataSource={data} allowPaging={true} contextMenuItems={contextMenuItems} allowSorting={true} allowExcelExport={true}
        allowPdfExport={true} ref={g => grid = g} created={created} >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='100' textAlign='Right'/>
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='120' />
        </ColumnsDirective>
        <Inject services={[ContextMenu, Page, Sort, ExcelExport, PdfExport]} />
      </GridComponent>
    </div>
  );
}
export default App;