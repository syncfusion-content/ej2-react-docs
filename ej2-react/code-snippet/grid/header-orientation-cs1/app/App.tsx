

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import './custom.css';
import { data } from './datasource';

function App() {
 const customAttributes: any = { class: 'orientationcss'};
  const setHeaderHeight = () => {
    /** Obtain the width of the headerText content */
    const textWidth: number = (document.querySelector(".orientationcss > div") as HTMLElement).scrollWidth;
    const headerCell: NodeList = document.querySelectorAll(".e-headercell");
    for(let i: number = 0; i < headerCell.length; i++) {
      /** Assign the obtained textWidth as the height of the headerCell */
      ((headerCell as any).item(i)).style.height = textWidth + 'px';
    }
  }
  return <div>
    <GridComponent dataSource={data} height={260} created={setHeaderHeight} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"/>
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'/>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right"/>
        <ColumnDirective field='Freight' headerText='Freight' customAttributes={customAttributes} width='80' format="C2" textAlign="Center"/>
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100'/>
      </ColumnsDirective>
    </GridComponent>
    </div>
};
export default App;


