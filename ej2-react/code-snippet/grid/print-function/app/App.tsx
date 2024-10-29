import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Toolbar,PrintEventArgs} from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const beforePrint=(args:PrintEventArgs)=> {
    var div = document.createElement("Div")
        div.innerHTML = "Title here"
        div.style.textAlign = 'center';
        div.style.color = 'red';
        div.style.padding = '10px 0';
        div.style.fontSize = '25px';
        (args.element as HTMLElement).insertBefore(div, (args.element as HTMLElement).childNodes[0]);
}
  return (<GridComponent  dataSource={data} toolbar={['Print']} height={272} beforePrint={beforePrint}>
              <ColumnsDirective>
              <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'/>
              <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
              <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
              <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
          </ColumnsDirective>
          <Inject services={[Toolbar]}/>
      </GridComponent >)
};
export default App;