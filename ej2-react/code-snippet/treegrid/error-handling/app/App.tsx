import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent, Edit, EditSettingsModel } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './data';

function App() {
  let treegrid: TreeGridComponent | null;
    const editOptions: EditSettingsModel = {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
    };
    const onActionFailure = (e: any) => {
      const span: HTMLElement = document.createElement('span');
      let treegrid = (document.getElementsByClassName('e-treegrid')[0] as any).ej2_instances[0];
      treegrid.element.parentNode.insertBefore(span, treegrid.element);
      span.style.color = "#FF0000";
      span.innerHTML = e.error[0];
    }
    return <TreeGridComponent ref={g => treegrid = g} dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks'
          height='270' editSettings={editOptions} actionFailure={onActionFailure}>
        <ColumnsDirective>
          <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
          <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
          <ColumnDirective field='startDate' headerText='Start Date' width='130' format='yMd' textAlign='Right' type='date' editType='datepickeredit' />
          <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Edit]}/>
    </TreeGridComponent>
};
export default App;


