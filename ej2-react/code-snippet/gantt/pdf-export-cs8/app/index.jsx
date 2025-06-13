import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, PdfExport, Selection,Column, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-gantt';
import { taskData } from './datasource';
function App() {
    const taskFields = {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentId',
    };
    const toolbarOptions = ['PdfExport'];
    let ganttObj;
    function toolbarClick(args) {
        ganttObj.pdfExport();
    }

    function beforePdfExport() {
        if (ganttObj) {
            const cols = ganttObj.treeGrid.columns;
            cols[3].visible = true;
            cols[2].visible = false;
        }
    };
    return <GanttComponent id='root' dataSource={taskData} beforePdfExport={beforePdfExport} taskFields={taskFields} toolbar={toolbarOptions} toolbarClick={toolbarClick} allowPdfExport={true} height='400px' ref={gantt => ganttObj = gantt}>
        <ColumnsDirective>
                    <ColumnDirective field='TaskId' width='100'/>
                    <ColumnDirective field='TaskName' headerText='Task Name'/>
                    <ColumnDirective field='StartDate'/>
                    <ColumnDirective field='Duration' visible={false}/>
                    <ColumnDirective field='Progress'/>
                </ColumnsDirective>
            <Inject services={[Toolbar, PdfExport, Selection]}/>
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));