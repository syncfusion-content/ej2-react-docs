import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Week, Month, TimelineViews, TimelineMonth, Agenda, ScheduleComponent, ViewsDirective, ViewDirective,
  ResourcesDirective, ResourceDirective, Inject
} from '@syncfusion/ej2-react-schedule';
import { resourceData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  const data: Object[] = extend([], resourceData, null, true) as Object[];
  const roomData: Object[] = [
    { RoomText: 'ROOM 1', Id: 1, RoomColor: '#cb6bb2' },
    { RoomText: 'ROOM 2', Id: 2, RoomColor: '#56ca85' }
  ]
  const ownerData: Object[] = [
    { OwnerText: 'Nancy', Id: 1, GroupId: 1, OwnerColor: '#ffaa00' },
    { OwnerText: 'Steven', Id: 2, GroupId: 2, OwnerColor: '#f8a398' },
    { OwnerText: 'Michael', Id: 3, GroupId: 1, OwnerColor: '#7499e1' }
  ];
  return (
    <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 3, 1)} eventSettings={{ dataSource: data }} group={{ resources: ['Rooms', 'Owners'] }} >
      <ResourcesDirective>
        <ResourceDirective field='RoomId' title='Room' name='Rooms'
          dataSource={roomData} textField='RoomText' idField='Id' colorField='RoomColor'>
        </ResourceDirective>
        <ResourceDirective field='OwnerId' title='Owner' name='Owners' allowMultiple={true}
          dataSource={ownerData} textField='OwnerText' idField='Id' groupIDField='GroupId' colorField='OwnerColor'>
        </ResourceDirective>
      </ResourcesDirective>
      <ViewsDirective>
        <ViewDirective option='Week' />
        <ViewDirective option='Month' />
        <ViewDirective option='TimelineWeek' />
        <ViewDirective option='TimelineMonth' />
      </ViewsDirective>
      <Inject services={[Week, Month, TimelineViews, TimelineMonth]} />
    </ScheduleComponent>
  )
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


