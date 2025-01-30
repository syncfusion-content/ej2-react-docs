import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttComponent, Inject, Toolbar, Filter, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
   let ganttInstance: any;
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };
  const toolbarOptions: any[] = ['QuickFilter', 'ClearFilter'];
  function enable() {
      ganttInstance.toolbarModule.enableItems([ganttInstance.element.id + '_QuickFilter', ganttInstance.element.id + '_ClearFilter'], true);// enable toolbar items.
   };
   function disable() {
      ganttInstance.toolbarModule.enableItems([ganttInstance.element.id + '_QuickFilter', ganttInstance.element.id + '_ClearFilter'], false);// disable toolbar items.
    };
   function toolbarClick(args: ClickEventArgs): void {
        if (args.item.text === 'QuickFilter') {
           ganttInstance.filterByColumn('TaskName', 'startswith', 'Identify');
        }
        if (args.item.text === 'ClearFilter') {
          ganttInstance.clearFiltering();
        }
    };
        return (<div>
        <ButtonComponent  onClick= {enable}>Enable</ButtonComponent>
        <ButtonComponent  onClick= { disable}>Disable</ButtonComponent>
        <GanttComponent dataSource={data} taskFields={taskFields} toolbar={toolbarOptions}
         toolbarClick={toolbarClick} allowFiltering={true} height = '450px'
         ref={gantt => ganttInstance = gantt}>
            <Inject services={[Toolbar, Filter]} />
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));