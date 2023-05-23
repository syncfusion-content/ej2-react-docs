import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Week, Month, TimelineViews, TimelineMonth, Agenda, ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject } from '@syncfusion/ej2-react-schedule';
import { resourceData } from './datasource';
const App = () => {
  const eventSettings = { dataSource: resourceData }
  const group = { byGroupID: false, resources: ['Rooms', 'Owners'] }
  const roomData = [
    { RoomText: 'ROOM 1', Id: 1, RoomColor: '#cb6bb2' },
    { RoomText: 'ROOM 2', Id: 2, RoomColor: '#56ca85' }
  ];
  const ownerData = [
    { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
    { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' }
  ];
  return (<ScheduleComponent width='100%' height='550px' currentView='Week' selectedDate={new Date(2018, 3, 1)} eventSettings={eventSettings} group={group}>
    <ViewsDirective>
      <ViewDirective option='Week' />
      <ViewDirective option='Month' />
      <ViewDirective option='TimelineWeek' />
      <ViewDirective option='TimelineMonth' />
      <ViewDirective option='Agenda' />
    </ViewsDirective>
    <ResourcesDirective>
      <ResourceDirective field='RoomId' title='Room' name='Rooms' allowMultiple={false} dataSource={roomData} textField='RoomText' idField='Id' colorField='RoomColor'>
      </ResourceDirective>
      <ResourceDirective field='OwnerId' title='Owner' name='Owners' allowMultiple={true} dataSource={ownerData} textField='OwnerText' idField='Id' colorField='OwnerColor'>
      </ResourceDirective>
    </ResourcesDirective>
    <Inject services={[Week, Month, TimelineViews, TimelineMonth, Agenda]} />
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
