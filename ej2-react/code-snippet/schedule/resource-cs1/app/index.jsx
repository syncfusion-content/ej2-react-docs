
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Week, Month, Agenda, ScheduleComponent, ResourcesDirective, ResourceDirective, Inject } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { resourceData } from './datasource';
function App() {
    const data = extend([], resourceData, null, true);
    const roomData = [
        { RoomText: 'ROOM 1', Id: 1, RoomGroupId: 1, RoomColor: '#cb6bb2' },
        { RoomText: 'ROOM 2', Id: 2, RoomGroupId: 2, RoomColor: '#56ca85' }
    ];
    const ownerData = [
        { OwnerText: 'Nancy', Id: 1, OwnerGroupId: 1, OwnerColor: '#ffaa00' },
        { OwnerText: 'Steven', Id: 2, OwnerGroupId: 2, OwnerColor: '#f8a398' },
        { OwnerText: 'Michael', Id: 3, OwnerGroupId: 1, OwnerColor: '#7499e1' }
    ];
    return <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 3, 1)} eventSettings={{ dataSource: data, resourceColorField: 'Owners' }} group={{ resources: ['Rooms', 'Owners'] }}>
    <ResourcesDirective>
      <ResourceDirective field='RoomId' title='Room' name='Rooms' allowMultiple={false} dataSource={roomData} textField='RoomText' idField='Id' groupIDField='RoomGroupId' colorField='RoomColor'>
      </ResourceDirective>
      <ResourceDirective field='OwnerId' title='Owner' name='Owners' allowMultiple={true} dataSource={ownerData} textField='OwnerText' idField='Id' groupIDField='OwnerGroupId' colorField='OwnerColor'>
      </ResourceDirective>
    </ResourcesDirective>
    <Inject services={[Week, Month, Agenda]}/>
  </ScheduleComponent>;
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
