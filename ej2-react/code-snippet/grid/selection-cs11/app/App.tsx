

import { render } from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, PageSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const settings: SelectionSettingsModel = { type: 'Multiple' };
  const pageOptions: PageSettingsModel = {
    pageSize: 5, pageSizes: true
  };
  const clickHandler = () => {
    grid.clearSelection();
  }
    return (
      <div className="control-pane">
        <div className="control-section">
          <ButtonComponent onClick={clickHandler}>Clear Selection</ButtonComponent>
          <GridComponent dataSource={data} allowPaging={true} allowSelection={true} selectedRowIndex={2} selectionSettings={settings} pageSettings={pageOptions} clickHandler={clickHandler} ref={g => grid = g}>
            <ColumnsDirective>
              <ColumnDirective field="OrderID" headerText="Order ID" isPrimaryKey={true} width="120" textAlign="Right"></ColumnDirective>
              <ColumnDirective field="CustomerID" headerText="Customer ID" width="120">
              </ColumnDirective>
              <ColumnDirective field="ShipCountry" headerText="Ship Country" width="120">
              </ColumnDirective>
              <ColumnDirective field="Freight" headerText="Freight" format='C2' width="100">
              </ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Page, Selection]} />
          </GridComponent>
        </div>
      </div>
    );
  }
export default App;


