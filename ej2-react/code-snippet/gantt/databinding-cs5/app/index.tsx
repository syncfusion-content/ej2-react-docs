


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Ajax } from '@syncfusion/ej2-base';
function App (){
    const taskFields: any = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    dependency: 'Predecessor',
    parentID: 'parentID',
  };
  let ganttInstance:any;
   function clickHandler() {
        let ajax = new Ajax("https://ej2services.syncfusion.com/production/web-services/api/GanttData","GET");
        ganttInstance.showSpinner();
        ajax.send();
        ajax.onSuccess = function (data: string) {
        ganttInstance.hideSpinner();
        ganttInstance.dataSource = (JSON.parse(data)).Items;
        ganttInstance.refresh();
    };
    }
    return
    <div>
        <ButtonComponent onClick={clickHandler}>Bind Data</ButtonComponent>
        <GanttComponent taskFields={taskFields} projectStartDate='02/24/2019' projectEndDate='07/20/2019'  height = '450px' ref={gantt => ganttInstance = gantt}>
        </GanttComponent>
        </div>
    };
ReactDOM.render(<App />, document.getElementById('root'));;



