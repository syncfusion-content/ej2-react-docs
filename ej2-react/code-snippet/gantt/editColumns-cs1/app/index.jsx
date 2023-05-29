import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, ColumnsDirective, ColumnDirective, Edit, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App () {
        const taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
       const editOptions = {
           allowEditing: true
        };
        return <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true} editSettings={editOptions} height='450px'>
         <ColumnsDirective>
                <ColumnDirective field='TaskID'></ColumnDirective>
                <ColumnDirective field='TaskName' allowEditing={false}></ColumnDirective>
                <ColumnDirective field='StartDate'></ColumnDirective>
                <ColumnDirective field='Duration'></ColumnDirective>
                <ColumnDirective field='Progress'></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Edit, Selection]} />
      </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));