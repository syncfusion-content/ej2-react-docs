import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { DataManager, ODataV4Adaptor, Query, EventSettingsModel } from '@syncfusion/ej2-data';

class CustomAdaptor extends ODataV4Adaptor {
  processResponse(): Object {
    let i: number = 0;
    // calling base class processResponse function
    let original: Object[] = super.processResponse.apply(this, arguments);
    // adding event id
    original.forEach((item: Object) => item['EventID'] = ++i);
    return original;
  }
}

function App() {
  const dataManager: DataManager = new DataManager({
    url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
    adaptor: new CustomAdaptor()
  });
  const eventSettings: EventSettingsModel = { dataSource: dataManager };

  return <ScheduleComponent height='550px' selectedDate={new Date(2020, 9, 20)} readonly={true}
    eventSettings={eventSettings}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



