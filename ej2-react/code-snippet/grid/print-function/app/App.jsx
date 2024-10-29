import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const beforePrint=(args)=> {
        var div = document.createElement("Div")
            div.innerHTML = "Title here"
            div.style.textAlign = 'center';
            div.style.color = 'red';
            div.style.padding = '10px 0';
            div.style.fontSize = '25px';
            args.element.insertBefore(div, args.element.childNodes[0]);
    }
    return (<GridComponent dataSource={data} toolbar={['Print']} beforePrint={beforePrint} height={272}>
              <ColumnsDirective>
              <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'/>
              <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
              <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
              <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
          </ColumnsDirective>
          <Inject services={[Toolbar]}/>
      </GridComponent>);
}
;
export default App;
