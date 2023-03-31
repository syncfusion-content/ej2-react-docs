import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { DataManager, ODataV4Adaptor, Query, EventSettingsModel } from '@syncfusion/ej2-data';

function App() {
  let dataManager: DataManager = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor: new ODataV4Adaptor()
  });
  let dataQuery: Query = new Query().from("Events").addParams('readOnly', 'true');
  const eventSettings: EventSettingsModel = { dataSource: dataManager, query: dataQuery };

  return <ScheduleComponent height='550px' readonly={true}
    eventSettings={eventSettings} selectedDate={new Date(2017, 5, 11)}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



