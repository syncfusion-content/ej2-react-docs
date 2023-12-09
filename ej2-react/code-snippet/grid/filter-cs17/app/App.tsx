import { ColumnDirective, ColumnsDirective, FilterSettingsModel } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  const filterSettings: FilterSettingsModel = {
    type: 'Menu',
    operators: {
      stringOperator: [
        { value: 'startsWith', text: 'Starts With' },
        { value: 'endsWith', text: 'Ends With' },
        { value: 'contains', text: 'Contains' },
        { value: 'equal', text: 'Equal' },
        { value: 'notEqual', text: 'Not Equal' }
      ],
      numberOperator: [
        { value: 'equal', text: 'Equal' },
        { value: 'notEqual', text: 'Not Equal' },
        { value: 'greaterThan', text: 'Greater Than' },
        { value: 'lessThan', text: 'Less Than' }
      ],
      dateOperator: [
        { value: 'equal', text: 'Equal' },
        { value: 'notEqual', text: 'Not Equal' },
        { value: 'greaterThan', text: 'After' },
        { value: 'lessThan', text: 'Before' }
      ],
      booleanOperator: [
        { value: 'equal', text: 'Equal' },
        { value: 'notEqual', text: 'Not Equal' }
      ]
    }
  }
  return (<div>
    <GridComponent dataSource={data} allowFiltering={true} height={315} filterSettings={filterSettings} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='CustomerID' width='100' />
        <ColumnDirective field='OrderDate' headerText='Order Date' width='100' textAlign="Right" format='yMd' />
        <ColumnDirective field='Verified' headerText='Verified' width='100' textAlign="Right" displayAsCheckBox={true} />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Filter]} />
    </GridComponent></div>)
};
export default App;