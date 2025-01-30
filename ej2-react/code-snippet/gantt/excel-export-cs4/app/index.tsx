import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttComponent, Inject, Toolbar, ToolbarItem, ExcelExport, ExcelExportProperties, Selection } from '@syncfusion/ej2-react-gantt';
import { firstGanttData, secondGanttData } from './datasource';
function App (){
    let firstGantt: any;
    let secondGantt: any;
    const taskFields: any = {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'parentId'
    };
    const toolbarOptions: ToolbarItem[] = ['ExcelExport'];
    function toolbarClick(args: ClickEventArgs): void {
       if (args.item.id === 'FirstGantt_excelexport') {
           const appendExcelExportProperties: ExcelExportProperties = {
                multipleExport: {type: 'NewSheet'}
            };
            const firstGanttExport: Promise<any> = firstGantt.excelExport(appendExcelExportProperties,true);
            firstGanttExport.then((fData: any) => {
                secondGantt.excelExport(appendExcelExportProperties,false,fData);
            });
        }
    };
    return (
        <div>
        <p><b>First Gantt:</b></p>
        <GanttComponent 
            id='FirstGantt' 
            dataSource={firstGanttData} 
            taskFields={taskFields} 
            toolbar={toolbarOptions}
            toolbarClick={toolbarClick} 
            allowExcelExport={true} 
            height='280px' 
            ref={gantt => firstGantt = gantt} 
            treeColumnIndex={1} 
            projectStartDate='03/31/2019' 
            projectEndDate='04/14/2019'
        >
            <Inject services={[Toolbar, ExcelExport, Selection]} />
        </GanttComponent>
        <p><b>Second Gantt:</b></p>
        <GanttComponent 
            id='SecondGantt' 
            dataSource={secondGanttData} 
            taskFields={taskFields} 
            allowExcelExport={true} 
            height='250px' 
            ref={gantt => secondGantt = gantt} 
            treeColumnIndex={1}
        >
            <Inject services={[ExcelExport, Selection]} />
        </GanttComponent>
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));