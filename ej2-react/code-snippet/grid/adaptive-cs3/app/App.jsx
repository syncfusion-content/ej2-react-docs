import { ColumnDirective, ColumnsDirective, GridComponent, Inject, } from '@syncfusion/ej2-react-grids';
import { Filter, Sort, Edit, Toolbar, Page, ColumnChooser, Group, ExcelExport, PdfExport } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser', 'ExcelExport', 'PdfExport'];
  const customeridRule = { required: true };
  const freightRule = { required: true };
  const orderidRules = { required: true, number: true };
  const filterOptions = { type: 'Excel' };
  const selectionSettings = { type: 'Multiple' };
  const dateFormat = { type: 'dateTime', format: 'M/d/y hh:mm a' };
  const adaptiveUIMode = 'Mobile'
  let grid;
  const created = () => {
    grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
  }
  function toolbarClick(args) {
    switch (args.item.id) {
      case 'Grid_pdfexport':
        grid.pdfExport();
        break;
      case 'Grid_excelexport':
        grid.excelExport();
        break;
      
    }
  }
  return (
    <div className="e-adaptive-demo e-bigger">
      <div className="e-mobile-layout">
        <div className="e-mobile-content">
          <GridComponent id="Grid" dataSource={data} height='100%' ref={g => grid = g} enableAdaptiveUI={true} adaptiveUIMode={adaptiveUIMode}
            allowFiltering={true} allowSorting={true} allowPaging={true} allowGrouping={true} showColumnChooser={true} allowSelection={true} selectionSettings={selectionSettings} 
            filterSettings={filterOptions} toolbar={toolbarOptions} editSettings={editSettings} allowExcelExport={true} allowPdfExport={true} created={created} toolbarClick={toolbarClick}>
              <ColumnsDirective>
              <ColumnDirective field='OrderID' headerText='Order ID' width='150' textAlign='Right' validationRules={orderidRules} isPrimaryKey={true}></ColumnDirective>
              <ColumnDirective field='CustomerID' headerText='Customer Name' width='160' minWidth='80' maxWidth='300' validationRules={customeridRule}></ColumnDirective>
              <ColumnDirective field='Freight' headerText='Freight' width='150' minWidth='80' maxWidth='300' format='C2' textAlign='Right' validationRules={freightRule} editType='numericedit' ></ColumnDirective>
              <ColumnDirective field='OrderDate' headerText='Order Date' format={dateFormat} width='170' editType='datepickeredit'></ColumnDirective>
              <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit'></ColumnDirective>
              </ColumnsDirective>
              <Inject services={[Filter, Sort, Edit, Group, Toolbar, Page, ColumnChooser, ExcelExport, PdfExport]} />
            </GridComponent>
        </div>
      </div>
    </div>
  )
}
export default App;