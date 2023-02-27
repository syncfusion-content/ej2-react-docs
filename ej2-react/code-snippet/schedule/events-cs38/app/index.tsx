


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  let data: Object[] = extend([], scheduleData, null, true) as Object[];
  const fields = {
    subject: { name: 'Subject', validation: { required: true } },
    location: {
      name: 'Location', validation: {
        required: true,
        regex: ["^[a-zA-Z0-9- ]*$", 'Special character(s) not allowed in this field']
      }
    }
  };

  return <ScheduleComponent height='550px' width='100%' selectedDate={new Date(2018, 1, 15)} eventSettings={{ dataSource: data, fields: fields }}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


