

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Week, Month, TimelineViews, TimelineMonth, Agenda, ScheduleComponent, ViewsDirective, ViewDirective,
  ResourcesDirective, ResourceDirective, Inject, EventSettingsModel, GroupModel
} from '@syncfusion/ej2-react-schedule';
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ChangeArgs } from '@syncfusion/ej2-buttons';
import { resourceData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  let scheduleObj: ScheduleComponent;
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
  let eventSettings: EventSettingsModel = { dataSource: data, resourceColorField: 'Rooms' };
  const group: GroupModel = { resources: ['Rooms', 'Owners'] };
  function onChange(args: ChangeArgs): void {
    scheduleObj.eventSettings.resourceColorField = args.value;
  }

  return (
    <div>
      <RadioButtonComponent value='Rooms' name='default' label='Rooms' checked={true} change={onChange} ></RadioButtonComponent>
      <RadioButtonComponent value='Owners' name='default' label='Owners' checked={false} change={onChange}></RadioButtonComponent>
      <ScheduleComponent ref={schedule => scheduleObj = schedule} width='100%' height='550px' currentView='Week' selectedDate={new Date(2018, 3, 1)} eventSettings={eventSettings} group={group}>
        <ViewsDirective>
          <ViewDirective option='Week' />
          <ViewDirective option='Month' />
          <ViewDirective option='TimelineWeek' />
          <ViewDirective option='TimelineMonth' />
          <ViewDirective option='Agenda' />
        </ViewsDirective>
        <ResourcesDirective>
          <ResourceDirective field='RoomId' title='Room' name='Rooms'
            dataSource={roomData} textField='RoomText' idField='Id' allowMultiple={false} colorField='RoomColor'>
          </ResourceDirective>
          <ResourceDirective field='OwnerId' title='Owner' name='Owners' allowMultiple={true}
            dataSource={ownerData} textField='OwnerText' idField='Id' groupIDField='GroupId' colorField='OwnerColor'>
          </ResourceDirective>
        </ResourcesDirective>
        <Inject services={[Week, Month, TimelineViews, TimelineMonth, Agenda]} />
      </ScheduleComponent>
    </div>
  )
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


