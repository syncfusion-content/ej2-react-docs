

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttComponent, Inject, Toolbar, ToolbarItem, ExcelExport, ExcelExportProperties, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component<{}, {}>{
    private firstGantt: any;
    private secondGantt: any;
    public taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
  };
  public toolbarOptions: ToolbarItem[] = ['ExcelExport'];
  public toolbarClick(args: ClickEventArgs): void {
       if (args.item.id === 'FirstGantt_excelexport') {
           const appendExcelExportProperties: ExcelExportProperties = {
                        multipleExport: {type: 'NewSheet'}
                    };
                    const firstGanttExport: Promise<any> = this.firstGantt.excelExport(appendExcelExportProperties,true);
                    firstGanttExport.then((fData: any) => {
                        this.secondGantt.excelExport(appendExcelExportProperties,false,fData);
                    });
            }
    };
    render() {
        return (
            <div>
            <p><b>First Gantt:</b></p>
            <GanttComponent id='FirstGantt' dataSource={[data[0]]} taskFields={this.taskFields} toolbar={this.toolbarOptions}
        toolbarClick={this.toolbarClick.bind(this)} allowExcelExport={true} height='280px' ref={gantt => this.firstGantt = gantt} treeColumnIndex={1} projectStartDate='03/31/2019' projectEndDate='04/14/2019'>
            <Inject services={[Toolbar, ExcelExport, Selection]} />
        </GanttComponent>
        <p><b>Second Gantt:</b></p>
            <GanttComponent id='SecondGantt' dataSource={[data[1]]} taskFields={this.taskFields} allowExcelExport={true} height='250px' ref={gantt => this.secondGantt = gantt} treeColumnIndex={1}>
            <Inject services={[ExcelExport, Selection]} />
        </GanttComponent>
            </div>
        );
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


