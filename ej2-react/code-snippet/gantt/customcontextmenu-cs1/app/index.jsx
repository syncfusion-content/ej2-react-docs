import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, ContextMenu, Sort, Resize } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component {
    ganttInstance;
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    };
    editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    };
    contextMenuItems = ['AutoFitAll', 'AutoFit', 'TaskInformation', 'DeleteTask', 'Save', 'Cancel', 'SortAscending', 'SortDescending', 'Add', 'DeleteDependency', 'Convert',
        { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' },
        { text: 'Expand the Row', target: '.e-content', id: 'expandrow' },
        { text: 'Hide Column', target: '.e-gridheader', id: 'hidecols' }
    ];
    contextMenuClick(args) {
        let record = args.rowData;
        if (args.item.id === 'collapserow') {
            this.ganttInstance.collapseByID(Number(record.ganttProperties.taskId));
        }
        if (args.item.id === 'expandrow') {
            this.ganttInstance.expandByID(Number(record.ganttProperties.taskId));
        }
        if (args.item.id === 'hidecols') {
            this.ganttInstance.hideColumn(args.column.headerText);
        }
    }
    ;
    contextMenuOpen(args) {
        let record = args.rowData;
        if (args.type !== 'Header') {
            if (!record.hasChildRecords) {
                args.hideItems.push('Collapse the Row');
                args.hideItems.push('Expand the Row');
            }
            else {
                if (record.expanded) {
                    args.hideItems.push("Expand the Row");
                }
                else {
                    args.hideItems.push("Collapse the Row");
                }
            }
        }
    }
    ;
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} editSettings={this.editSettings} allowSorting={true} allowResizing={true} enableContextMenu={true} contextMenuItems={this.contextMenuItems} contextMenuClick={this.contextMenuClick.bind(this)} contextMenuOpen={this.contextMenuOpen.bind(this)} ref={gantt => this.ganttInstance = gantt} height='450px'>
            <Inject services={[Edit, ContextMenu, Selection, Sort, Resize]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
