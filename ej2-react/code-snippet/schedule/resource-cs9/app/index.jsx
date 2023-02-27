
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Week, Month, TimelineViews, TimelineMonth, Agenda, ScheduleComponent, ResourcesDirective, ResourceDirective, ViewsDirective, ViewDirective, Inject } from '@syncfusion/ej2-react-schedule';
function App() {
    const conferenceData = [
        { Text: 'Margaret', Id: 1, Color: '#1aaa55' },
        { Text: 'Robert', Id: 2, Color: '#357cd2' },
        { Text: 'Laura', Id: 3, Color: '#7fa900' }
    ];
    const data = [
        {
            Id: 1,
            Subject: 'Burning Man',
            StartTime: new Date(2018, 5, 1, 15, 0),
            EndTime: new Date(2018, 5, 1, 17, 0),
            ConferenceId: [1, 2, 3]
        }, {
            Id: 2,
            Subject: 'Data-Driven Economy',
            StartTime: new Date(2018, 5, 2, 12, 0),
            EndTime: new Date(2018, 5, 2, 14, 0),
            ConferenceId: [1, 2]
        }, {
            Id: 3,
            Subject: 'Techweek',
            StartTime: new Date(2018, 5, 2, 15, 0),
            EndTime: new Date(2018, 5, 2, 17, 0),
            ConferenceId: [2, 3]
        }, {
            Id: 4,
            Subject: 'Content Marketing World',
            StartTime: new Date(2018, 5, 2, 18, 0),
            EndTime: new Date(2018, 5, 2, 20, 0),
            ConferenceId: [1, 3]
        }, {
            Id: 5,
            Subject: 'B2B Marketing Forum',
            StartTime: new Date(2018, 5, 3, 10, 0),
            EndTime: new Date(2018, 5, 3, 12, 0),
            ConferenceId: [1, 2, 3]
        }
    ];
    return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 5, 5)} currentView='WorkWeek' eventSettings={{ dataSource: data }} group={{ allowGroupEdit: true, resources: ['Conferences'] }}>
      <ViewsDirective>
        <ViewDirective option='Week'/>
        <ViewDirective option='Month'/>
        <ViewDirective option='TimelineWeek'/>
        <ViewDirective option='TimelineMonth'/>
        <ViewDirective option='Agenda'/>
      </ViewsDirective>
      <ResourcesDirective>
        <ResourceDirective field='ConferenceId' title='Conference' name='Conferences' allowMultiple={true} dataSource={conferenceData} textField='Text' idField='Id' colorField='Color'>
        </ResourceDirective>
      </ResourcesDirective>
      <Inject services={[Week, Month, TimelineViews, TimelineMonth, Agenda]}/>
    </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
