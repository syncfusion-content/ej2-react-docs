import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Page, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { CustomAdaptor } from './CustomAdaptor';

function App() {
   const data = new DataManager({
      adaptor: new CustomAdaptor(),
      url: 'https://services.syncfusion.com/react/production/api/Orders',
    });
    return <div>
        <GridComponent dataSource={data} height={280}>
          <ColumnsDirective>
            <ColumnDirective field="CustomerID" headerText="Customer ID" width="150"/>
            <ColumnDirective field="ShipCity" headerText="Ship City" width="150"/>
            <ColumnDirective field="ShipName" headerText="Ship Name" width="150"/>
          </ColumnsDirective>
        <Inject services={[Page]} />
        </GridComponent>
    </div>
};
export default App;