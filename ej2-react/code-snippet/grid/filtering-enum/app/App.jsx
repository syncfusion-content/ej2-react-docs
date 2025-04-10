import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Filter } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import * as React from 'react';
import { data, FileType } from './datasource';

function App() {
  
  let grid;
  const filterDropData = [
    { Type: 'All' },
    { Type: 'Base' },
    { Type: 'Replace' },
    { Type: 'Delta' },
  ];

  const onTypeFilterChange = (args) => {
    if (grid) {
      if (args.value === "All") {
        grid.clearFiltering();
      } else {
        grid.filterByColumn("Type", "contains", FileType[args.value]);
      }
    }
  };

  const filterTemplate = () => {
    return (
      <DropDownListComponent
        dataSource={filterDropData}
        fields={{ text: "Type", value: "Type" }}
        value={filterDropData[0].Type}
        change={onTypeFilterChange}
      />
    );
  };

  const typeTemplate = (props) => {
    return (
      <span>
        {props.Type === 1 ? "Base" : props.Type === 2 ? "Replace" : props.Type === 3 ? "Delta" : ""}
      </span>
    );
  };
  
  return (
    <GridComponent id='Grid' dataSource={data} allowFiltering={true} ref={g => grid = g} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
          <ColumnDirective field="CustomerID" headerText="Customer ID" width="120" />
          <ColumnDirective field="ShipCity" headerText="Ship City" width="100" />
          <ColumnDirective field="ShipName" headerText="Ship Name" width="100" />
          <ColumnDirective 
            field="Type" 
            headerText="Type" 
            width="130" 
            template={typeTemplate} 
            filterTemplate={filterTemplate} 
          />
        </ColumnsDirective>
      <Inject services={[Filter]} />
    </GridComponent>
  );

};
export default App;