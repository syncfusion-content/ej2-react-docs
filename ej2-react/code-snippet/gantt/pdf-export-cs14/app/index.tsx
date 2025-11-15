import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { GanttComponent, Inject, Toolbar, ToolbarItem, PdfExport, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    let ganttChart: any;
    const  taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
  };
  const  toolbarOptions: ToolbarItem[] = ['PdfExport'];
  function toolbarClick(args: ClickEventArgs): void {
    console.log(args.item.text);
       if (args.item.text === 'PDF export') {
           ganttChart.pdfExport();
        }
    };
        return <GanttComponent id='root' dataSource={data} taskFields={taskFields}
        toolbar={toolbarOptions}
        toolbarClick={toolbarClick} allowPdfExport={true} height='400px'
        ref={gantt => ganttChart = gantt}>
            <Inject services={[Toolbar, PdfExport, Selection]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));