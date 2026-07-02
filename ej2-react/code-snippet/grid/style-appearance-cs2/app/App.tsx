

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource.tsx';

function App() {
  const [isBigger, setIsBigger] = React.useState(false);
  function toggleMode() {
    const controls = document.querySelectorAll('.grid');
    for (let index = 0; index < controls.length; index++) {
      controls[index].classList.toggle('e-bigger', !isBigger);
    }
    setIsBigger(!isBigger);
  }
  return (
    <div>
      <ButtonComponent
        id="toggleBtn"
        content={isBigger ? 'Mouse Mode' : 'Touch Mode'}
        onClick={toggleMode}
      ></ButtonComponent>
      <div>
        {/* Assigns the dataset to the Grid component */}
        <div className="grid">
          <GridComponent dataSource={data}>
            {/* Define the columns to be displayed */}
            <ColumnsDirective>
              <ColumnDirective
                field="OrderID"
                headerText="Order ID"
                width="100"
                textAlign="Right"
              />
              <ColumnDirective
                field="CustomerID"
                headerText="Customer Name"
                width="120"
              />
              <ColumnDirective
                field="OrderDate"
                headerText="Order Date"
                width="100"
                format="yMd"
                textAlign="Right"
              />
              <ColumnDirective
                field="Freight"
                width="100"
                format="C2"
                textAlign="Right"
              />
              <ColumnDirective
                field="ShipCountry"
                headerText="Ship Country"
                width="100"
              />
            </ColumnsDirective>
          </GridComponent>
        </div>
      </div>
    </div>
  );
};
export default App;



