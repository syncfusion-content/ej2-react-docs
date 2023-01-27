import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection } from '@syncfusion/ej2-react-gantt';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { closest } from '@syncfusion/ej2-base';
import { editingData, editingResources } from './datasource';
class App extends React.Component {
    ganttInstance;
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        resourceInfo: 'resources',
        child: 'subtasks'
    };
    resourceFields = {
        id: 'resourceId',
        name: 'resourceName'
    };
    editSettings = {
        allowEditing: true
    };
    labelSettings = {
        rightLabel: 'resources'
    };
    fields = { dataSource: editingResources, id: 'resourceId', text: 'resourceName' };
    allowDragAndDrop = true;
    nodeDragStop(args) {
        let chartEle = closest(args.target, '.e-chart-row');
        let gridEle = closest(args.target, '.e-row');
        if (gridEle) {
            var index = this.ganttInstance.treeGrid.getRows().indexOf(gridEle);
            this.ganttInstance.selectRow(index);
        }
        let record = args.draggedNodeData;
        let selectedData = this.ganttInstance.flatData[this.ganttInstance.selectedRowIndex];
        let selectedDataResource = selectedData.taskData.resources;
        let resources = [];
        if (selectedDataResource) {
            for (var i = 0; i < selectedDataResource.length; i++) {
                resources.push(selectedDataResource[i].resourceId);
            }
        }
        resources.push(parseInt(record.id));
        if (chartEle || gridEle) {
            var data = {
                TaskID: selectedData.taskData.TaskID,
                resources: resources
            };
            this.ganttInstance.updateRecordByID(data);
            var elements = document.querySelectorAll('.e-drag-item');
            while (elements.length > 0 && elements[0].parentNode) {
                elements[0].parentNode.removeChild(elements[0]);
            }
        }
    }
    ;
    render() {
        return <div><GanttComponent dataSource={editingData} taskFields={this.taskFields} resources={editingResources} editSettings={this.editSettings} height='450px' resourceFields={this.resourceFields} labelSettings={this.labelSettings} ref={gantt => this.ganttInstance = gantt}>
           <Inject services={[Edit, Selection]}/>
        </GanttComponent>
        <TreeViewComponent fields={this.fields} allowDragAndDrop={this.allowDragAndDrop} nodeDragStop={this.nodeDragStop.bind(this)}/>);
        </div>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
