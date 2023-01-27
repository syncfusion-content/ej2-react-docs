


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { GanttComponent, Inject, Toolbar, ToolbarItem, PdfExport, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component<{}, {}>{
    private ganttChart: any;
    public taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
  };
  public toolbarOptions: ToolbarItem[] = ['PdfExport'];
  public toolbarClick(args: ClickEventArgs): void {
       if (args.item.text === 'Pdf export') {
           this.ganttChart.pdfExport();
        }
    };
    render() {
        return <GanttComponent id='root' dataSource={data} taskFields={this.taskFields}
        toolbar={this.toolbarOptions}
        toolbarClick={this.toolbarClick.bind(this)} allowPdfExport={true} height='400px'
        ref={gantt => this.ganttChart = gantt}>
            <Inject services={[Toolbar, PdfExport, Selection]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));



