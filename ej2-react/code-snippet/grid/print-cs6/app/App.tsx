import { ColumnDirective, ColumnsDirective, GridComponent, PageSettingsModel, SelectionSettingsModel, PrintEventArgs } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Toolbar } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { createElement } from '@syncfusion/ej2-base';
import { data } from './datasource';

interface CustomElement extends Element {
  ej2_instances: any[];
}

function App() {
  let grid: GridComponent | null;
  const pageOptions: PageSettingsModel = { pageSize: 6 };
  const selectionSettings: SelectionSettingsModel = { type: 'Multiple' };
  const beforePrint = (e: PrintEventArgs) => {
    var rows = (grid as GridComponent).getSelectedRows();
    if (rows.length) {
      (e.element as CustomElement).ej2_instances[0].getContent().querySelector('tbody').remove();
      var tbody = createElement('tbody');
      rows = [...rows];
      for (var r = 0; r < rows.length; r++) {
        tbody.appendChild(rows[r].cloneNode(true));
      }
      (e.element as CustomElement).ej2_instances[0].getContentTable().appendChild(tbody);
    }
  }
  return ((<div>
    <GridComponent ref={g => grid = g} dataSource={data} toolbar={['Print']} allowPaging={true} pageSettings={pageOptions} selectionSettings={selectionSettings} beforePrint={beforePrint}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
      </ColumnsDirective>
      <Inject services={[Toolbar, Page]} />
    </GridComponent ></div>))
};
export default App;