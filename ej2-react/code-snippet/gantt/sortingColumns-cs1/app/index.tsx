

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Sort } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component<{}, {}>{
   private gantt: any;
    public taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };

    public clickHandler() {
        this.gantt.sortModule.sortColumn('TaskID', "Descending", false);
    }
    render() {
        return (<div>
            <ButtonComponent onClick={this.clickHandler.bind(this)}>Sort Column</ButtonComponent>
            <GanttComponent dataSource={data} ref={g => this.gantt = g} taskFields={this.taskFields}
                allowSorting={true} height='450px'>
               <Inject services={[Sort]} />
            </GanttComponent></div>)
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


