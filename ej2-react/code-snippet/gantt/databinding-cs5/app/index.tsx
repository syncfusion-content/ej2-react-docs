


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Ajax } from '@syncfusion/ej2-base';
class App extends React.Component<{}, {}>{
    public taskFields: any = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    dependency: 'Predecessor',
    parentID: 'parentID',
  };
    clickHandler() {
        let ajax = new Ajax("https://ej2services.syncfusion.com/production/web-services/api/GanttData","GET");
        this.ganttInstance.showSpinner();
        ajax.send();
        ajax.onSuccess = function (data: string) {
        this.ganttInstance.hideSpinner();
        this.ganttInstance.dataSource = (JSON.parse(data)).Items;
        this.ganttInstance.refresh();
    };
    }
    render() {
        return
        <ButtonComponent onClick={this.clickHandler.bind(this)}>Bind Data</ButtonComponent>
        <GanttComponent taskFields={this.taskFields} projectStartDate='02/24/2019' projectEndDate='07/20/2019' actionFailure={this.actionFailure.bind(this)} height = '450px' ref={gantt => this.ganttInstance = gantt}>
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));



