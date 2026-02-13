import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Group, GroupSettingsModel, Toolbar } from '@syncfusion/ej2-react-grids';
import { ItemDirective, ItemsDirective, ToolbarComponent, ClickEventArgs } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const groupOptions: GroupSettingsModel = {
    columns: ['CustomerID']
  };
  const toolbarTemplate = () => {
    return (
      <ToolbarComponent clicked={clickHandler}>
        <ItemsDirective>
          <ItemDirective id="collapse" text="Collapse All" prefixIcon="e-chevron-up icon"></ItemDirective>
          <ItemDirective id="expand" text="Expand All" prefixIcon="e-chevron-down icon"></ItemDirective>
        </ItemsDirective>
      </ToolbarComponent>
    )
  }
  const clickHandler = (args: ClickEventArgs) => {
    const target: HTMLElement | null = (args.originalEvent.target as HTMLElement).closest('button');
    if ((target as HTMLElement).id === 'expand') {
      // collapse all expanded grouped row
      (grid as GridComponent).groupModule.expandAll();
    }
    if ((target as HTMLElement).id === "collapse") {
      // expand all collapsed grouped row
      (grid as GridComponent).groupModule.collapseAll();
    }
  }
  return (<GridComponent dataSource={data} allowGrouping={true} groupSettings={groupOptions} toolbarTemplate={toolbarTemplate} ref={g => grid = g} height={240}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
    </ColumnsDirective>
    <Inject services={[Toolbar, Group]} />
  </GridComponent>)
}
export default App;


