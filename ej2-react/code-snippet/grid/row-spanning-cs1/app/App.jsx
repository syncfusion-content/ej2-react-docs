import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-grids';
import { Freeze, Sort } from '@syncfusion/ej2-react-grids';
import { telecastData } from './datasource';

function App() {
  return (
    <GridComponent dataSource={telecastData} gridLines="Both" enableHover={false} allowSelection={false} allowSorting={true} enableRowSpan={true} allowTextWrap={true} textWrapSettings={{ wrapMode: 'Content' }} height={355} width="auto" >
      <ColumnsDirective>
        <ColumnDirective field="Channel" headerText="Channel" width={150} freeze="Left" isPrimaryKey={true} />
        <ColumnDirective field="Genre" headerText="Genre" width={120} freeze="Left" />
        <ColumnDirective field="Program12AM" headerText="12 AM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program1AM" headerText="1 AM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program2AM" headerText="2 AM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program3AM" headerText="3 AM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program4AM" headerText="4 AM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program5AM" headerText="5 AM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program6AM" headerText="6 AM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program7AM" headerText="7 AM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program8AM" headerText="8 AM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program9AM" headerText="9 AM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program10AM" headerText="10 AM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program11AM" headerText="11 AM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program12PM" headerText="12 PM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program1PM" headerText="1 PM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program2PM" headerText="2 PM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program3PM" headerText="3 PM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program4PM" headerText="4 PM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program5PM" headerText="5 PM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program6PM" headerText="6 PM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program7PM" headerText="7 PM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program8PM" headerText="8 PM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program9PM" headerText="9 PM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program10PM" headerText="10 PM" width={110} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Program11PM" headerText="11 PM" width={110} textAlign="Center" allowSorting={false} />
      </ColumnsDirective>
      <Inject services={[Freeze, Sort]} />
    </GridComponent>
  );
}

export default App;