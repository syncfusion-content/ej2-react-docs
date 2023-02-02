import { L10n, loadCldr, setCulture } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
import * as cagregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
loadCldr(cagregorian, numbers);
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
class App extends React.Component {
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
    render() {
        return <GanttComponent dataSource={data} locale='de-DE' allowSelection={true} taskFields={this.taskFields} height='450px'>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
