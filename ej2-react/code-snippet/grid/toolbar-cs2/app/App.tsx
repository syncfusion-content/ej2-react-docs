

import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Grid, Group, GroupSettingsModel, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let gridInstance: Grid | null;
  const toolbarOptions: object[] = [
    { text: 'Expand All', tooltipText: 'Expand All', prefixIcon: 'e-expand', id: 'expandall' },
    { text: 'Collapse All', tooltipText: 'Collapse All', prefixIcon: 'e-collapse', id: 'collapseall', align:'Right' }
  ];
  const groupOptions: GroupSettingsModel = {
    columns: ['CustomerID']
  };
  const clickHandler = (args: any) => {
     if (gridInstance && args.item.id === 'expandall') {
      gridInstance.groupModule.expandAll();
    }
     if(gridInstance && args.item.id === "collapseall"){
      gridInstance.groupModule.collapseAll();
    }
  }
    return (<GridComponent dataSource={data} allowGrouping={true} groupSettings ={groupOptions}
          toolbar={toolbarOptions} toolbarClick={clickHandler}
          ref={g => gridInstance = g} height={240}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
          <ColumnDirective field='CustomerID' width='100'/>
          <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
          <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
          <ColumnDirective field='ShipCountry' width='100'/>
        </ColumnsDirective>
        <Inject services={[ Toolbar, Group ]} />
    </GridComponent>)
}
export default App;


