import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, Edit, TaskFieldsModel, ResourceFieldsModel, LabelSettingsModel,
    SplitterSettingsModel, EditSettingsModel, EditDialogFieldsDirective, EditDialogFieldDirective } from '@syncfusion/ej2-react-gantt';
import { Tab } from '@syncfusion/ej2-navigations';
import { Grid, SelectionSettingsModel } from '@syncfusion/ej2-grids';
import { GanttData, ProjectResources } from './datasource';

function App() {

    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        resourceInfo: 'resources',
        parentID: 'ParentID'
    };

    const labelSettings: LabelSettingsModel = {
        leftLabel: 'TaskName',
        rightLabel: 'resources'
    };

    const resourceFields: ResourceFieldsModel = {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'Unit'
    };

    const columns: object[] = [
        { field: 'TaskID',  width: '70' },
        { field: 'TaskName', headerText: 'Task Name', width: '220' },
        { field: 'resources', headerText: 'Resources', width: '160' },
        { field: 'Duration', width: '100' }
    ];

    const splitterSettings: SplitterSettingsModel = {
        columnIndex: 3
    };

    const editSettings: EditSettingsModel = {
        allowEditing: true,
    };

    const projectStartDate: Date = new Date('03/25/2019');
    const projectEndDate: Date = new Date('04/28/2019');

    const actionBegin = (args: any) => {
        if (args.requestType == 'beforeOpenEditDialog') {
            // Remove the checkbox column from the Resources tab.
            args.Resources.columns.splice(0, 1);
            // Disable resource selection for a specific task.
            if (args.rowData.TaskID == 3) {
                args.Resources.allowSelection = false;
            }
        }
    };

    const actionComplete = (args: any) => {
        if (args.requestType == 'openEditDialog') {
            // Get the Resources tab instance.
            let tabObj: Tab = (document.getElementById('Gantt_Tab') as any).ej2_instances[0];
            // Get the resource Grid instance from the Resources tab.
            let gridObj: Grid = (document.getElementById('GanttResourcesTabContainer_gridcontrol') as any).ej2_instances[0];
            // Configure the resource grid to allow only a single selection.
            gridObj.selectionSettings = {
                checkboxOnly: false,
                type: 'Single',
                persistSelection: false
            }  as SelectionSettingsModel;
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