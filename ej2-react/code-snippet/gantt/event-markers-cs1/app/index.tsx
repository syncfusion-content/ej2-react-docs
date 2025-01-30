import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, DayMarkers, EventMarkersDirective, EventMarkerDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App (){
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const eventMarkerDay: Date = new Date('4/10/2019');
        return <GanttComponent dataSource={data} taskFields={taskFields} height = '450px'>
        <EventMarkersDirective>
              <EventMarkerDirective day={eventMarkerDay} cssClass='e-custom-event-marker'  label='Project approval and kick-off' ></EventMarkerDirective>
        </EventMarkersDirective>
            <Inject services={[DayMarkers]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));