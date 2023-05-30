import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

const App = () => {
  const [dataManager, setDataManager] = useState<DataManager | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const manager = new DataManager({
        url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
        adaptor: new ODataV4Adaptor()
      });
      const query = new Query().from('Events').addParams('readOnly', 'true');
      const data = await manager.executeQuery(query) as any;
      setDataManager(new DataManager(data));
    };

    fetchData();
  }, []);

  const eventSettings: EventSettingsModel = { dataSource: dataManager };

  return (
    <ScheduleComponent
      height='550px'
      readonly={true}
      eventSettings={eventSettings}
      selectedDate={new Date(2017, 5, 11)}
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);