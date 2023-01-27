

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, ContextMenu, Sort, Resize, EditSettingsModel, IGanttData } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component<{}, {}>{
    private ganttInstance: any;
    public taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  };
  public editSettings: EditSettingsModel = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true
  };
  public contextMenuItems: any = ['AutoFitAll', 'AutoFit', 'TaskInformation', 'DeleteTask', 'Save', 'Cancel', 'SortAscending', 'SortDescending', 'Add', 'DeleteDependency', 'Convert',
        { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' },
        { text: 'Expand the Row', target: '.e-content', id: 'expandrow' },
        { text: 'Hide Column', target: '.e-gridheader', id: 'hidecols' }
        ];
    public contextMenuClick (args: any) {
        let record: IGanttData = args.rowData;
        if (args.item.id === 'collapserow') {
            this.ganttInstance.collapseByID(Number(record.ganttProperties.taskId));
            }
        if (args.item.id === 'expandrow') {
            this.ganttInstance.expandByID(Number(record.ganttProperties.taskId));
            }
        if (args.item.id === 'hidecols') {
            this.ganttInstance.hideColumn(args.column.headerText);
        }
        };
    public contextMenuOpen (args: any) {
        let record: IGanttData = args.rowData;
            if (args.type !== 'Header') {
                if (!record.hasChildRecords) {
                    args.hideItems.push('Collapse the Row');
                    args.hideItems.push('Expand the Row');
                } else {
                    if(record.expanded){
                    args.hideItems.push("Expand the Row");
                    } else {
                    args.hideItems.push("Collapse the Row");
                    }
                }
            }
        };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields} editSettings={this.editSettings} allowSorting={true} allowResizing={true} enableContextMenu={true} contextMenuItems={this.contextMenuItems} contextMenuClick={this.contextMenuClick.bind(this)} contextMenuOpen={this.contextMenuOpen.bind(this)} ref={gantt => this.ganttInstance = gantt} height = '450px'>
            <Inject services={[Edit, ContextMenu, Selection, Sort, Resize]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


