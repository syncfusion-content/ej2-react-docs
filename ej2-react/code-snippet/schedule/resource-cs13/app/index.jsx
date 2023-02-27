
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { WorkWeek, Month, TimelineViews, ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject } from '@syncfusion/ej2-react-schedule';
import { doctorData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
    const data = extend([], doctorData, null, true);
    const resourceData = [
        { text: 'Will Smith', id: 1, color: '#ea7a57', workDays: [1, 2, 4, 5] },
        { text: 'Alice', id: 2, color: '#357cd2', workDays: [1, 3, 5] },
        { text: 'Robson', id: 3, color: '#7fa900', workDays: [2, 6] }
    ];
    return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 3, 1)} currentView='WorkWeek' eventSettings={{ dataSource: data }} group={{ resources: ['Doctors'] }}>
      <ResourcesDirective>
        <ResourceDirective field='DoctorId' title='Doctor' name='Doctors' dataSource={resourceData} textField='text' idField='id' colorField='color' workDaysField='workDays'>
        </ResourceDirective>
      </ResourcesDirective>
      <ViewsDirective>
        <ViewDirective option='TimelineWeek'/>
        <ViewDirective option='WorkWeek'/>
        <ViewDirective option='Month'/>
      </ViewsDirective>
      <Inject services={[TimelineViews, WorkWeek, Month]}/>
    </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
