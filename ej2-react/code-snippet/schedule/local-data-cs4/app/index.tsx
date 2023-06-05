import { useState, useEffect } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

const CustomAdaptor = () => {
  ODataV4Adaptor.call(this);
}

CustomAdaptor.prototype = Object.create(ODataV4Adaptor.prototype);
CustomAdaptor.prototype.constructor = CustomAdaptor;

CustomAdaptor.prototype.processResponse = function () {
  let i = 0;
  let original = ODataV4Adaptor.prototype.processResponse.apply(this, arguments);
  original.forEach((item: any) => (item['EventID'] = ++i));
  return original;
};

const App = () => {
  const [dataManager, setDataManager] = useState<DataManager | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const manager = new DataManager({
        url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
        adaptor: new CustomAdaptor(),
      });
      const query = new Query().take(10); // Example query to limit the number of records
      const data = await manager.executeQuery(query) as any;
      setDataManager(new DataManager(data));
    };

    fetchData();
  }, []);

  const eventSettings: EventSettingsModel = { dataSource: dataManager };

  return (
    <ScheduleComponent
      height='550px'
      selectedDate={new Date(2020, 9, 20)}
      readonly={true}
      eventSettings={eventSettings}
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);