

import { render } from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, PageSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';

function App() {
  const settings = { persistSelection: true };
  let gridInstance;
  const pageOptions = {
    pageSize: 5, pageSizes: true
  };
  const clickHandler = () => {
    let select = gridInstance.getSelectedRecords();
    alert(select.length);
  };
    return (
      <div className="control-pane">
        <div className="control-section">
          <ButtonComponent onClick={clickHandler}>Selected Records</ButtonComponent>
          <GridComponent dataSource={data} ref={grid => gridInstance = grid} allowSelection={true}allowPaging={true} selectionSettings={settings} pageSettings={pageOptions}>
            <ColumnsDirective>
              <ColumnDirective type='checkbox' width='50'/>
              <ColumnDirective field="OrderID" headerText="Order ID" isPrimaryKey={true} width="120" textAlign="Right">
              </ColumnDirective>
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


