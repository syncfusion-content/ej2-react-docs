import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TimelineViews, TimelineMonth, ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject } from '@syncfusion/ej2-react-schedule';
import { resourceData } from './datasource';
const App = () => {
  const eventSettings = { dataSource: resourceData, ignoreWhitespace: true };
  const group = { resources: ['Rooms', 'Owners'] };
  const roomData = [
    { RoomText: 'ROOM 1', Id: 1, RoomColor: '#cb6bb2' },
    { RoomText: 'ROOM 2', Id: 2, RoomColor: '#56ca85' }
  ];
  const ownerData = [
    { OwnerText: 'Nancy', Id: 1, GroupId: 1, OwnerColor: '#ffaa00' },
    { OwnerText: 'Steven', Id: 2, GroupId: 2, OwnerColor: '#f8a398' },
    { OwnerText: 'Michael', Id: 3, GroupId: 1, OwnerColor: '#7499e1' }
  ];
  return (<ScheduleComponent width='100%' height='550px' currentView='TimelineWeek' rowAutoHeight={true} selectedDate={new Date(2021, 7, 4)} eventSettings={eventSettings} group={group}>
    <ViewsDirective>
      <ViewDirective option='TimelineDay' />
      <ViewDirective option='TimelineWeek' />
      <ViewDirective option='TimelineMonth' />
    </ViewsDirective>
    <ResourcesDirective>
      <ResourceDirective field='RoomId' title='Room' name='Rooms' dataSource={roomData} textField='RoomText' idField='Id' colorField='RoomColor'>
      </ResourceDirective>
      <ResourceDirective field='OwnerId' title='Owner' name='Owners' allowMultiple={true} dataSource={ownerData} textField='OwnerText' idField='Id' groupIDField='GroupId' colorField='OwnerColor'>
      </ResourceDirective>
    </ResourcesDirective>
    <Inject services={[TimelineViews, TimelineMonth]} />
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
