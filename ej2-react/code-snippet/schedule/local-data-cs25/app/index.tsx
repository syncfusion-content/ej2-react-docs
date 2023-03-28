import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  TimelineViews, ScheduleComponent, ViewsDirective,
  ViewDirective, ResourcesDirective, ResourceDirective, Inject, Resize, DragAndDrop
} from '@syncfusion/ej2-react-schedule';
import { roomData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  const data: Object[] = extend([], roomData, null, true) as Object[];
  const ownerData: Object[] = [
    { text: 'Room A', id: 1, color: '#98AFC7' },
    { text: 'Room B', id: 2, color: '#99c68e' },
    { text: 'Room C', id: 3, color: '#C2B280' },
    { text: 'Room D', id: 4, color: '#3090C7' },
    { text: 'Room E', id: 5, color: '#95b9' },
    { text: 'Room F', id: 6, color: '#95b9c7' },
    { text: 'Room G', id: 7, color: '#deb887' },
    { text: 'Room H', id: 8, color: '#3090C7' },
    { text: 'Room I', id: 9, color: '#98AFC7' },
    { text: 'Room J', id: 10, color: '#778899' }
  ];
  const fieldsData = {
    id: 'Id',
    subject: { title: 'Summary', name: 'Subject' },
    location: { title: 'Location', name: 'Location' },
    description: { title: 'Comments', name: 'Description' },
    startTime: { title: 'From', name: 'StartTime' },
    endTime: { title: 'To', name: 'EndTime' }
}
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 7, 1)} rowAutoHeight={true} eventSettings={{ dataSource: data, fields: fieldsData }} group={{ enableCompactView: false, resources: ['MeetingRoom'] }} >
    <ResourcesDirective>
      <ResourceDirective field='RoomId' title='Room Type' name='MeetingRoom' allowMultiple={true}
        dataSource={ownerData} textField='text' idField='id' colorField='color'>
      </ResourceDirective></ResourcesDirective>
    <ViewsDirective>
      <ViewDirective option='TimelineDay' />
      <ViewDirective option='TimelineWeek' />
    </ViewsDirective>
    <Inject services={[TimelineViews, Resize, DragAndDrop]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


