import * as React from 'react';
import * as ReactDOM from "react-dom";
import {
  TimelineViews, TimelineMonth, ScheduleComponent, ViewsDirective, ViewDirective, RenderCellEventArgs,
  ResourceDetails, ResourcesDirective, ResourceDirective, Inject, EventSettingsModel, GroupModel
} from '@syncfusion/ej2-react-schedule';
import { roomData } from './datasource';

const App = () => {
  const getRoomName = (value: ResourceDetails) => {
    return (value as ResourceDetails).resourceData[(value as ResourceDetails).resource.textField];
  }
  const getRoomType = (value: ResourceDetails) => {
    return (value as ResourceDetails).resourceData.type;
  }
  const getRoomCapacity = (value: ResourceDetails) => {
    return (value as ResourceDetails).resourceData.capacity;
  }
  const eventSettings: EventSettingsModel = { dataSource: roomData };
  const group: GroupModel = { resources: ['MeetingRoom'] };

  const ownerData: Object[] = [
    { text: 'Jammy', id: 1, color: '#ea7a57', capacity: 20, type: 'Conference' },
    { text: 'Tweety', id: 2, color: '#7fa900', capacity: 7, type: 'Cabin' },
    { text: 'Nestle', id: 3, color: '#5978ee', capacity: 5, type: 'Cabin' },
    { text: 'Phoenix', id: 4, color: '#fec200', capacity: 15, type: 'Conference' },
    { text: 'Mission', id: 5, color: '#df5286', capacity: 25, type: 'Conference' },
    { text: 'Hangout', id: 6, color: '#00bdae', capacity: 10, type: 'Cabin' },
    { text: 'Rick Roll', id: 7, color: '#865fcf', capacity: 20, type: 'Conference' },
    { text: 'Rainbow', id: 8, color: '#1aaa55', capacity: 8, type: 'Cabin' },
    { text: 'Swarm', id: 9, color: '#df5286', capacity: 30, type: 'Conference' },
    { text: 'Photogenic', id: 10, color: '#710193', capacity: 25, type: 'Conference' }
  ];
  const resourceHeaderTemplate = (props): JSX.Element => {
    return (<div className="template-wrap">
      <div className="room-name">{getRoomName(props)}</div>
      <div className="room-type">{getRoomType(props)}</div>
      <div className="room-capacity">{getRoomCapacity(props)}</div>
    </div>
    );
  }
  const onRenderCell = (args: RenderCellEventArgs): void => {
    if (args.elementType === 'emptyCells' && args.element.classList.contains('e-resource-left-td')) {
      let target: HTMLElement = args.element.querySelector('.e-resource-text') as HTMLElement;
      target.innerHTML = '<div class="name">Rooms</div><div class="type">Type</div><div class="capacity">Capacity</div>';
    }
  }
  return (
    <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 7, 1)} currentView='TimelineWeek' resourceHeaderTemplate={resourceHeaderTemplate} eventSettings={eventSettings} renderCell={onRenderCell} group={group}>
      <ResourcesDirective>
        <ResourceDirective field='RoomId' title='Room Type' name='MeetingRoom' dataSource={ownerData} textField='text' idField='id' colorField='color' >
        </ResourceDirective>
      </ResourcesDirective>
      <ViewsDirective>
        <ViewDirective option='TimelineWeek' />
        <ViewDirective option='TimelineMonth' />
      </ViewsDirective>
      <Inject services={[TimelineViews, TimelineMonth]} />
    </ScheduleComponent>
  )
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


