import { ColumnDirective, ColumnsDirective, GridComponent } from "@syncfusion/ej2-react-grids";
import * as React from "react";
import { data } from "./datasource";

function App() {
  let grid: GridComponent | null;
  const created = () => {
    const scroller = document.getElementById('scroller') as HTMLDivElement;
    const content = (grid as GridComponent).getContent().firstElementChild as HTMLDivElement;
    const contentTable = (grid as GridComponent).getContentTable() as HTMLTableElement;

    (grid as GridComponent).element.insertBefore(scroller, content.parentElement);

    scroller.onscroll = () => (content.scrollLeft = scroller.scrollLeft);
    content.onscroll = () => (scroller.scrollLeft = content.scrollLeft);

    const setScroller = () => {
      scroller.innerHTML = `<div style="width: ${contentTable.offsetWidth}px; height: 18px;"></div>`;
      scroller.style.height = content.scrollWidth <= content.clientWidth ? '0px' : '18px';
    };

    setScroller();
    window.onresize = setScroller;
  };

  return (
    <div>
      <div id="scroller" style={{width: '100%', overflowX: 'auto'}}></div>
      <GridComponent ref={g => grid = g} dataSource={data} height='315' width='500' created={created}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' textAlign='Right' width='90' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
          <ColumnDirective field='EmployeeID' headerText='Employee ID' textAlign="Right" width='80' />
          <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' textAlign='Right' />
          <ColumnDirective field='Freight' headerText='Freight' width='80' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='130' />
          <ColumnDirective field='ShipAddress' headerText='Ship Address' width='140' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
          <ColumnDirective field='ShipRegion' headerText='Ship Region' width='80' />
          <ColumnDirective field='ShipPostalCode' headerText='Ship Postal Code' width="110" />
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
}
export default App;