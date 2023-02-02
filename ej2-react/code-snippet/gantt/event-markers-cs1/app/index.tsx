

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, DayMarkers, EventMarkersDirective, EventMarkerDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

class App extends React.Component<{}, {}>{
    public taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };
  public eventMarkerDay: Date = new Date('4/10/2019');
  render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} height = '450px'>
        <EventMarkersDirective>
              <EventMarkerDirective day={this.eventMarkerDay} cssClass='e-custom-event-marker'  label='Project approval and kick-off' ></EventMarkerDirective>
        </EventMarkersDirective>
            <Inject services={[DayMarkers]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


