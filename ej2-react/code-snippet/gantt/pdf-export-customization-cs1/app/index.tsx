import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { GanttComponent, Inject, Toolbar, ToolbarItem, PdfExport, Selection } from '@syncfusion/ej2-react-gantt';
import { data ,image } from './datasource';
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
       if (args.item.text === 'Pdf export') {
        var exportProperties = {
            header: {
                fromTop: 0,
                height: 150,
                contents: [
                    {
                        type: 'Text',
                        value: 'Welcome',
                        position: { x: 380, y: 0 },
                        style: { textBrushColor: '#C25050', fontSize: 25 },
                    },
                    {
                        type: 'Image',
                        src: image,
                        position: { x: 400, y: 70 },
                        size: { height: 50, width: 50 },
                    },
                ]
            },
            footer: {
                fromBottom: 160,
                height: 100,
                contents: [
                    {
                        type: 'Text',
                        value: 'Thank you!',
                        position: { x: 350, y: 40 },
                        style: { textBrushColor: '#C67878', fontSize: 14 }
                    },
                    {
                        type: 'PageNumber',
                        pageNumberType: 'Arabic',
                        format: 'Page {$current} of {$total}',
                        position: { x: 0, y: 25 },
                        size: { height: 50, width: 100 },
                        style: { textBrushColor: '#000000', hAlign: 'Center', vAlign: 'Bottom' }
                    }
                ]
            }
        };
           ganttChart.pdfExport(exportProperties);
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