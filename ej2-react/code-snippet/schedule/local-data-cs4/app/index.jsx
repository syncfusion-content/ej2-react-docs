{% raw %}
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
class CustomAdaptor extends ODataV4Adaptor {
    processResponse() {
        let i = 0;
        // calling base class processResponse function
        let original = super.processResponse.apply(this, arguments);
        // adding event id
        original.forEach((item) => item['EventID'] = ++i);
        return original;
    }
}
function App() {
    const dataManager = new DataManager({
        url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
        adaptor: new CustomAdaptor()
    });
    return <ScheduleComponent height='550px' selectedDate={new Date(2020, 9, 20)} readonly={true} eventSettings={{ dataSource: dataManager }}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
  </ScheduleComponent>;
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
{% endraw %}