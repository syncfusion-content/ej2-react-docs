import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-grids';
import { Freeze, Sort } from '@syncfusion/ej2-react-grids';
import { shiftPlanData } from './datasource';

function App() {
  const doctorTemplate = (props: any) => (
    <div>
      <div className="doctor-name">{props.Name}</div>
      <div className="doctor-designation">{props.Designation}</div>
    </div>
  );

  return (
    <GridComponent dataSource={shiftPlanData} gridLines="Both" allowSorting={true} enableColumnSpan={true} allowTextWrap={true} textWrapSettings={{ wrapMode: 'Content' }} height={450} width="auto" >
      <ColumnsDirective>
        <ColumnDirective field="Name" headerText="Doctor Name" width={170} textAlign="Center" freeze="Left" template={doctorTemplate} />
        <ColumnDirective field="Time9AM" headerText="9:00 AM" width={120} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Time10AM" headerText="10:00 AM" width={120} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Time11AM" headerText="11:00 AM" width={120} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Time12PM" headerText="12:00 PM" width={120} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Time1PM" headerText="1:00 PM" width={120} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Time2PM" headerText="2:00 PM" width={120} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Time3PM" headerText="3:00 PM" width={120} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Time4PM" headerText="4:00 PM" width={120} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Time5PM" headerText="5:00 PM" width={120} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Time6PM" headerText="6:00 PM" width={120} textAlign="Center" allowSorting={false} />
        <ColumnDirective field="Time7PM" headerText="7:00 PM" width={120} textAlign="Center" allowSorting={false} />
      </ColumnsDirective>
      <Inject services={[Freeze, Sort]} />
    </GridComponent>
  );
}

export default App;
