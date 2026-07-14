import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { ordersTrackData } from './datasource';

function App() {
  const gridRef = React.useRef(null);
  const [filterType, setFilterType] = React.useState('CheckBox');

  const filterOptions = {
    type: filterType,
    mode: 'Immediate'
  };

  const typeData = [
    { text: 'CheckBox', value: 'CheckBox' },
    { text: 'Excel', value: 'Excel' },
  ];

  const handleTypeChange = (e) => {
    setFilterType(e.value);
  };

  return (
    <div>
      <div
        style={{
          marginBottom: '20px',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          width: '250px'
        }}
      >
        <label
          style={{
            marginRight: '10px',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            marginBottom: '0'
          }}
        >
          Filter Type:
        </label>
        <DropDownListComponent
          id="filterType"
          dataSource={typeData}
          fields={{ text: 'text', value: 'value' }}
          value={filterType}
          change={handleTypeChange}
        />
      </div>
      <GridComponent
        ref={gridRef}
        dataSource={ordersTrackData}
        filterSettings={filterOptions}
        allowFiltering={true}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="OrderID"
            headerText="Order ID"
            textAlign="Right"
            width="100"
            isPrimaryKey={true}
          />
          <ColumnDirective
            field="CustomerName"
            headerText="Customer Name"
            width="120"
          />
          <ColumnDirective
            field="OrderDate"
            headerText="Order Date"
            textAlign="Right"
            width="100"
            format="yMd"
          />
          <ColumnDirective field="Product" headerText="Product" width="80" />
          <ColumnDirective field="Status" headerText="Status" width="80" />
          <ColumnDirective
            field="Amount"
            headerText="Amount"
            textAlign="Right"
            width="80"
          />
        </ColumnsDirective>
        <Inject services={[Filter]} />
      </GridComponent>
    </div>
  );
}
export default App;
