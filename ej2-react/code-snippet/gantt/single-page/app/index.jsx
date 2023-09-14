import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { GanttComponent, Inject, Toolbar, ToolbarItem, PdfExport, Selection } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';
function App(){
    let ganttChart;
    const  taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks',
  };
  const  toolbarOptions = ['PdfExport'];
  function toolbarClick(args) {
       if (args.item.text === 'Pdf export') {
        var exportProperties= {
            fitToWidthSettings: {       
                isFitToWidth: true,       
            }       
        };
           ganttChart.pdfExport(exportProperties);
        }
    };
        return <GanttComponent id='root' dataSource={GanttData} taskFields={taskFields}
        toolbar={toolbarOptions}
        toolbarClick={toolbarClick} allowPdfExport={true} height='400px'
        ref={gantt => ganttChart = gantt}>
            <Inject services={[Toolbar, PdfExport, Selection]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));