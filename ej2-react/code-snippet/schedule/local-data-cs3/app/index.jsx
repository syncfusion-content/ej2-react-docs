import { useState, useEffect } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

const App = () => {
  const [dataManager, setDataManager] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const manager = new DataManager({
        url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
        adaptor: new ODataV4Adaptor()
      });
      await manager.ready;
      setDataManager(manager);
    };
    fetchData();
  }, []);
  const eventSettings = { dataSource: dataManager };
  return (
    <ScheduleComponent height='550px' selectedDate={new Date(2020, 9, 20)} readonly={true} eventSettings={eventSettings}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);