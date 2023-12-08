import { ChipListComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Group, GroupSettingsModel, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const dataBound = () => {
    let groupCations = document.getElementsByClassName('groupChip');
    for (var i = 0; i < groupCations.length; i++) {
      var chip = new ChipListComponent({});
      chip.appendTo(groupCations[i] as HTMLElement);
    }
  }
  const groupOptions: GroupSettingsModel = {
    captionTemplate: '<div id="chip" class="groupChip">${key}</div>'
  };
  return <div>
    <GridComponent dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={267} dataBound={dataBound}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
    </ColumnsDirective>
    <Inject services={[Group]} />
  </GridComponent ></div>
};
export default App;
