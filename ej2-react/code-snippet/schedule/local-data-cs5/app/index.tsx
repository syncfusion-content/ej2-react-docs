import { useState, useEffect } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

const App = () => {
  const [dataManager, setDataManager] = useState<DataManager | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const manager = new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
        adaptor: new ODataV4Adaptor()
      });
      await manager.ready;
      const query = new Query().addParams('readOnly', 'true');
      const data = await manager.executeQuery(query) as any;
      setDataManager(manager);    
    };

    fetchData();
  }, []);
  const fieldsData = {
    id: 'Id',
    subject: { name: 'ShipName' },
    location: { name: 'ShipCountry' },
    description: { name: 'ShipAddress' },
    startTime: { name: 'OrderDate' },
    endTime: { name: 'RequiredDate' },
    recurrenceRule: { name: 'ShipRegion' }
  }
  const eventSettings: EventSettingsModel = { dataSource: dataManager, fields: fieldsData };

  return (
    <ScheduleComponent
      height='550px'
      readonly={true}
      eventSettings={eventSettings}
      selectedDate={new Date(1996, 6, 9)}
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);