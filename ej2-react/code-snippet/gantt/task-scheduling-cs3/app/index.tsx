import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, Toolbar, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function  App() {
        const taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID',
            manual: 'isManual'
        };
        const toolbarOptions = ['Add', 'Edit', 'Delete', 'Cancel', 'Update', 'PrevTimeSpan', 'NextTimeSpan', 'ExpandAll', 'CollapseAll', 'Search'];
        const editSettings = {
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true
        };
        return <GanttComponent dataSource={data} taskFields={taskFields} highlightWeekends={true} toolbar={toolbarOptions} editSettings={editSettings} taskMode='Custom' height='450px'>
         <ColumnsDirective>
                <ColumnDirective field='TaskID' visible={false}></ColumnDirective>
                <ColumnDirective field='TaskName'></ColumnDirective>
                <ColumnDirective field='isManual'></ColumnDirective>
            </ColumnsDirective>
         <Inject services={[Edit, Selection, Toolbar]}/>
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));