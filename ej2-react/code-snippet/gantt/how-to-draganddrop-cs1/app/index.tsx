

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, ToolbarItem }from '@syncfusion/ej2-react-gantt';
import { DragAndDropEventArgs } from '@syncfusion/ej2-navigations';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { closest,addClass } from '@syncfusion/ej2-base';
import { editingData, editingResources } from './datasource';
class App extends React.Component<{}, {}>{
    private ganttInstance: any;
    public taskFields: any = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      resourceInfo: 'resources',
      child: 'subtasks'
    };
    public resourceFields = {
        id: 'resourceId',
        name: 'resourceName'
    };
    public editSettings = {
      allowEditing: true
    };
    public labelSettings = {
      rightLabel: 'resources'
    };
    public fields = { dataSource: editingResources, id: 'resourceId', text: 'resourceName' };
    public allowDragAndDrop = true;
    public nodeDragStop(args: DragAndDropEventArgs): void {
        let chartEle: any = closest(args.target, '.e-chart-row');
        let gridEle: any = closest(args.target, '.e-row');
        if(gridEle){
          var index = this.ganttInstance.treeGrid.getRows().indexOf(gridEle);
          this.ganttInstance.selectRow(index);
        }
        let record: any = args.draggedNodeData;
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
    };
  
    render() {
        return <div><GanttComponent dataSource={editingData} taskFields={this.taskFields} resources={editingResources} editSettings={this.editSettings}
         height='450px' resourceFields={this.resourceFields}  labelSettings={this.labelSettings} ref={gantt => this.ganttInstance = gantt}>
           <Inject services={[ Edit, Selection]} />
        </GanttComponent>
        <TreeViewComponent fields={this.fields} allowDragAndDrop={this.allowDragAndDrop} nodeDragStop={this.nodeDragStop.bind(this)}/>);
        </div>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


