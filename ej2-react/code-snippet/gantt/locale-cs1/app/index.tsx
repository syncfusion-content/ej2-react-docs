

import { L10n, setCulture } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
setCulture('de-DE');

L10n.load({
  'de-DE': {
      'gantt': {
           "id": "Ich würde",
            "name": "Name",
            "startDate": "Anfangsdatum",
            "duration": "Dauer",
            "progress": "Fortschritt",
     }
  }
});

class App extends React.Component<{}, {}> {
    public taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
    render() {
        return <GanttComponent dataSource={data} locale='de-DE' allowSelection={true} taskFields={this.taskFields}  height = '450px'>
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


