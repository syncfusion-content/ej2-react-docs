import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, Edit, EditDialogFieldsDirective, EditDialogFieldDirective } from '@syncfusion/ej2-react-gantt';
import { GanttData, ProjectResources } from './datasource';

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        resourceInfo: 'resources',
        parentID: 'ParentID'
    };

    const labelSettings = {
        leftLabel: 'TaskName',
        rightLabel: 'resources'
    };

    const resourceFields = {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'Unit'
    };

    const columns = [
        { field: 'TaskID',  width: '70' },
        { field: 'TaskName', headerText: 'Task Name', width: '220' },
        { field: 'resources', headerText: 'Resources', width: '160' },
        { field: 'Duration', width: '100' }
    ];
    const splitterSettings = {
        columnIndex: 3
    };

    const editSettings = {
        allowEditing: true,
    };

    const projectStartDate = new Date('03/25/2019');
    const projectEndDate = new Date('04/28/2019');

    const actionBegin = (args) => {
        if (args.requestType == 'beforeOpenEditDialog') {
            // Remove the checkbox column from the Resources tab.
            args.Resources.columns.splice(0, 1);
            // Disable resource selection for a specific task.
            if (args.rowData.TaskID == 3) {
                args.Resources.allowSelection = false;
            }
        }
    };

    const actionComplete = (args) => {
        if (args.requestType == 'openEditDialog') {
            // Get the Resources tab instance.
            let tabObj = document.getElementById('Gantt_Tab').ej2_instances[0];
            // Get the resource Grid instance from the Resources tab.
            let gridObj = document.getElementById('GanttResourcesTabContainer_gridcontrol').ej2_instances[0];
            // Configure the resource grid to allow only a single selection.
            gridObj.selectionSettings = {
                checkboxOnly: false,
                type: 'Single',
                persistSelection: false
            };
        }
    };

    return (
        <GanttComponent
            height="450px"
            id="Gantt"
            dataSource={GanttData}
            taskFields={taskFields}
            treeColumnIndex={1}
            splitterSettings={splitterSettings}
            projectStartDate={projectStartDate}
            editSettings={editSettings}
            projectEndDate={projectEndDate}
            labelSettings={labelSettings}
            resourceFields={resourceFields}
            resources={ProjectResources}
            columns={columns}
            actionBegin={actionBegin}
            actionComplete={actionComplete}
        >
            <EditDialogFieldsDirective>
                <EditDialogFieldDirective
                type="Resources" />
            </EditDialogFieldsDirective>

            <Inject services={[Selection, Edit]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));