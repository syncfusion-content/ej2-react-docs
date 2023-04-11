import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

function App() {
  let dataManager: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
    adaptor: new ODataV4Adaptor()
  });

  return (
    <ScheduleComponent height='550px' currentView='Month' selectedDate={new Date(1996, 6, 9)} readonly={true}
      eventSettings={{
        includeFiltersInQuery: true, dataSource: dataManager, fields: {
          id: 'Id',
          subject: { name: 'ShipName' },
          location: { name: 'ShipCountry' },
          description: { name: 'ShipAddress' },
          startTime: { name: 'OrderDate' },
          endTime: { name: 'RequiredDate' },
          recurrenceRule: { name: 'ShipRegion' }
        }
      }}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  )

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
