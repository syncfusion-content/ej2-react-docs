import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Grid, GridComponent, Inject, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  let gridInstance: Grid | null;
  let initialGridLoad: boolean = true;
  const pageOptions: PageSettingsModel = {
    pageSize: 10, pageSizes: true
  };
  const dataBound = () => {
      if (initialGridLoad && gridInstance) {
          initialGridLoad = false;
          const pager = document.getElementsByClassName('e-gridpager');
          let topElement = document.getElementsByClassName('e-gridheader');
          gridInstance.element.insertBefore(pager[0], topElement[0]);
      }
  }
    return (<GridComponent  dataSource={data} ref={grid => gridInstance = grid} allowPaging={true} height={300}
              pageSettings={pageOptions} dataBound={dataBound}>
              <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
                <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
            </ColumnsDirective>
            <Inject services={[Page]}/>
        </GridComponent>)
};
export default App;