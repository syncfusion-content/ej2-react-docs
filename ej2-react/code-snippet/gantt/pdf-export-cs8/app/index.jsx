import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { GanttComponent, Inject, Toolbar, PdfExport, Selection,Column, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
        const taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        const toolbarOptions = ['PdfExport'];

        let ganttChart;
        let grid;
        function toolbarClick(args) {
        ganttChart.pdfExport();
    }

    function beforePdfExport() {
    if (grid) {
      (grid.columns[3] ).visible = true;
      (grid.columns[2] ).visible = false;
     }
    };
    return <GanttComponent id='root' dataSource={data} taskFields={taskFields} toolbar={toolbarOptions} toolbarClick={toolbarClick} allowPdfExport={true} height='400px' ref={gantt => ganttChart = gantt}>
        <ColumnsDirective>
                    <ColumnDirective field='TaskID' width='50'/>
                    <ColumnDirective field='TaskName' headerText='Task Name'/>
                    <ColumnDirective field='StartDate'/>
                    <ColumnDirective field='Duration' visible={false}/>
                    <ColumnDirective field='Progress'/>
                </ColumnsDirective>
            <Inject services={[Toolbar, PdfExport, Selection]}/>
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));
